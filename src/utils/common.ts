import { employeeRole, hrAdminRole, superAdminRole } from 'utils/constants';
import { IPermissionsSet, IUser, TUserRole } from 'utils/types';

export const getPermissionSet = (role: TUserRole): IPermissionsSet => {
  switch (role) {
    case 'superAdmin': return superAdminRole;
    case 'hrAdmin': return hrAdminRole;
    case 'employee': return employeeRole;
    default: return {};
  }
};

export const hasPermission = (user: IUser, permissionName: string): boolean => {
  if (!user?.role) return false;
  const permissions = getPermissionSet(user.role);
  return Object.prototype.hasOwnProperty.call(permissions, permissionName);
};
