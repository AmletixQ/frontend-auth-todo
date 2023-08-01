import { Dispatch, SetStateAction } from "react";

export interface ILoading {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
