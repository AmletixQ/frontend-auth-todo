export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface IPoolSettings {
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
}

export type ILogInData = Omit<IUser, "id" | "username">;
export type ISignInData = Omit<IUser, "id">;
