/* --- STATE --- */
export interface UserState {
  user?: User;
}

export interface User {
  email: string;
  full_name: string;
  roles: string[];
}
