import React, {ReactElement} from 'react';
import usePermission from "../../hooks/usePermission";
import { Features, Permissions } from "../../enums";
import { TPrivileges, IRestrictedProps } from "../../types";

import * as style from './restricted.style';

/**
 * @description A wrapper that secures a component that it allowed by permissions
 * @param feature Feature name
 * @param permission Requested permission
 * @param fallback Fallback component that could be in use when there is no match between requested permissions and defined permissions
 * @param loadingComponent Loader that will be shown in the meantime
 * @param children Component that should be shown according to user privileges
 * @constructor
 */
export const Restricted: React.FC<IRestrictedProps> = ({
  feature,
  permission,
  fallback,
  loadingComponent,
  children,
}) => {
  const { loading, allowed } = usePermission(feature, permission);

  if (loading) {
    return <>{loadingComponent}</>;
  }

  const renderChildren = (isReadOnly: boolean = false): ReactElement => {
    return isReadOnly ? <style.ReadOnly>{children}</style.ReadOnly> : <>{children}</>
  }

  if (allowed) {
    switch (permission) {
      case Permissions.read:
        if (
          allowed.includes(Permissions.write) ||
          allowed.includes(Permissions.publish)
        ) {
          return renderChildren();
        } else if (allowed.includes(Permissions.read)) {
          return renderChildren(true);
        }
        break;
      case Permissions.write:
        if (
          allowed.includes(Permissions.write) ||
          allowed.includes(Permissions.publish)
        ) {
            return renderChildren();
        }
        break;
      case Permissions.publish:
        if (allowed.includes(Permissions.publish)) {
            return renderChildren();
        }
        break;
    }
  }

  return <>{fallback}</>;
};

export const fetchPermissions =
  (userRole: TPrivileges | null) =>
  async (feature: Features) => {
    if (userRole) {
      return userRole[feature];
    }

    return [];
  };
