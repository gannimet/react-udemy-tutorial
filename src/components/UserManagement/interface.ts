export interface UserManagementProps {
  minCount: number;
  maxCount: number;
}

export interface UserManagementState {
  userData: UserData[];
  displayCount: number;
}

export interface UserData {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserDataAPI {
  data: UserData;
}