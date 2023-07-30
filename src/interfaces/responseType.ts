import { IUser } from "./userType";

export interface IResponse {
  message: string;
  status: number;
  data: IUser | null;
}
