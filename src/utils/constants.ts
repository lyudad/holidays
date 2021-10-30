import { IPermissionsSet } from './types';

export const superAdminRole: IPermissionsSet = {
  canDeclineDaysOff: true,
  canApproveDaysOff: true,
  canEditOwnDaysOff: true,
  canEditEmployeesDaysOff: true,
  canSeeUsersList: true,
  canCreateUser: true,
  canModifyUser: true,
  canDeleteUser: true,
  canSendPassword: true,
  canBlockUser: true,
  canUnblockUser: true,
};
export const hrAdminRole: IPermissionsSet = {
  canDeclineDaysOff: true,
  canApproveDaysOff: true,
  canEditOwnDaysOff: true,
  canEditEmployeesDaysOff: true,
  canSeeDashboard: true,
  canSeeUsersList: true,
  canSendPassword: true,
  canBlockUser: true,
  canUnblockUser: true,
};
export const employeeRole: IPermissionsSet = {
  canEditOwnDaysOff: true,
  canSeeDashboard: true,
};
