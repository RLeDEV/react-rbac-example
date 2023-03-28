import { useContext, useState } from 'react';
import PermissionContext from '../context/permission/permissionContext';
import { Features } from '../enums';
import { TPermission } from "../types";

/**
 * @description Gets user privileges for a feature whether it should be allowed or not for the user
 * @param feature Feature name
 * @param permission Permission type
 */
const usePermission = (
  feature: Features,
  permission: TPermission
): { loading: boolean; allowed: TPermission[] } => {
  const [loading, setLoading] = useState<boolean>(true);
  const [allowed, setAllowed] = useState<TPermission[]>([]);

  const { isAllowedTo } = useContext(PermissionContext);

  isAllowedTo(feature, permission).then((allowed) => {
    setLoading(false);
    setAllowed(allowed);
  });

  return { loading, allowed };
};

export default usePermission;
