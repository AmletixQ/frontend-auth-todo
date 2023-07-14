export interface IUser {
  id: number;
  username: string;
  password: string;
}

export type IEnterUserData = Omit<IUser, "id">;
export interface IResponse {
  message: string;
  status: number;
}

export interface IPoolSettings {
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
}
