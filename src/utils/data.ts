import { IPermissionsSet } from './types';

export const superAdminRole: IPermissionsSet = {
  canDeclineDaysOff: true,
  canApproveDaysOff: true,
  canEditOwnDaysOff: true,
  canEditEmployeesDaysOff: true,
  canSeeDashboard: false,
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
  canCreateUser: false,
  canModifyUser: false,
  canDeleteUser: false,
  canSendPassword: true,
  canBlockUser: true,
  canUnblockUser: true,
};
export const employeeRole: IPermissionsSet = {
  canDeclineDaysOff: false,
  canApproveDaysOff: false,
  canEditOwnDaysOff: true,
  canEditEmployeesDaysOff: false,
  canSeeDashboard: true,
  canSeeUsersList: false,
  canCreateUser: false,
  canModifyUser: false,
  canDeleteUser: false,
  canSendPassword: false,
  canBlockUser: false,
  canUnblockUser: false,
};
