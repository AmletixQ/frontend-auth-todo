export interface ILogInData {
  email: string;
  password: string;
}

export interface ISignInData extends ILogInData {
  username: string;
}
