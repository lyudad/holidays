export type TUserRole = 'superAdmin' | 'hrAdmin' | 'employee';

export interface IUser {
  _id: string;
  name: string;
  role: TUserRole;
}

export interface IPermissionsSet {
  canDeclineDaysOff: boolean;
  canApproveDaysOff: boolean;
  canEditOwnDaysOff: boolean;
  canEditEmployeesDaysOff: boolean;
  canSeeDashboard: boolean;
  canSeeUsersList: boolean;
  canCreateUser: boolean;
  canModifyUser: boolean;
  canDeleteUser: boolean;
  canSendPassword: boolean;
  canBlockUser: boolean;
  canUnblockUser: boolean;
}
