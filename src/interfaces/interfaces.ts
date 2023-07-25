export type TUser = {
  id: number;
  email: string;
  password: string;
};

export type IUser = Omit<TUser, "password">;
export type IEnterUserData = Omit<TUser, "id">;

export interface ISession {
  id: number;
  email: string;
}

export interface IResponse {
  message: string;
  status: number;
  data: IUser | null;
}

export interface IPoolSettings {
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
}
