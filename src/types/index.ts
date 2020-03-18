import { Dispatch } from "react";

export interface IState {}

export interface IAction {
  type: string;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
