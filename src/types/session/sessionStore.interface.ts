import { IEntrance } from "../entrance.interface";
import ISession from "./session.interface";

export default interface ISessionStore {
  session: ISession;
  entrance: (_data: IEntrance, url: string) => Promise<void>;
  logout: () => Promise<void>;
  update: () => void;
}