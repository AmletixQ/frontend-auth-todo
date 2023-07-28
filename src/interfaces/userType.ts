export type TUser = {
  id: number;
  email: string;
  password: string;
};

export type IUser = Omit<TUser, "password">;
export type IEnterUserData = Omit<TUser, "id">;
