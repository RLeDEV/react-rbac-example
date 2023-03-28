import React, { useCallback } from 'react';
import PermissionContext from './permissionContext';
import { Features } from "../../enums";
import { TPermission, IPermissionCache } from "../../types";

type TPermissionProviderProps = {
  fetchPermission: (
    feature: Features,
    permission: TPermission
  ) => Promise<TPermission[]>;
  children: React.ReactNode | React.ReactFragment | React.ReactPortal;
};

export const PermissionProvider: React.FC<TPermissionProviderProps> = ({
  fetchPermission,
  children,
}) => {
  const cache: IPermissionCache = {};

  const isAllowedTo = useCallback(
    async (
      feature: Features,
      permission: TPermission
    ): Promise<TPermission[]> => {
      if (Object.keys(cache).includes(feature)) {
        return cache[feature];
      }

      const isAllowed = await fetchPermission(feature, permission);
      cache[feature] = isAllowed;

      return isAllowed;
    },
    []
  );

  return (
    <PermissionContext.Provider value={{ isAllowedTo }}>
      {children}
    </PermissionContext.Provider>
  );
};
