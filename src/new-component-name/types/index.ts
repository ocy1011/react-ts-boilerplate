import { Dispatch } from "react";

export interface IState {
  value: number;
}

export interface IAction {
  type: string;
  value?: number;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}