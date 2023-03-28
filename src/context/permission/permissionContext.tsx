import React from 'react';
import { Features } from '../../enums';
import { TPermission } from '../../types';

type TPermissionContext = {
  isAllowedTo: (
    feature: Features,
    permission: TPermission
  ) => Promise<TPermission[]>;
};

const defaultBehavior: TPermissionContext = {
  isAllowedTo: () => Promise.resolve([]),
};

const PermissionContext =
  React.createContext<TPermissionContext>(defaultBehavior);

export default PermissionContext;
