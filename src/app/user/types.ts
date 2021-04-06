/* --- STATE --- */
export interface UserState {
  user?: {
    myProfile: {
      email?: string;
      full_name?: string;
    };
  };
}

export type MyProfile = {
  myProfile: {
    email?: string;
    full_name?: string;
  };
};
