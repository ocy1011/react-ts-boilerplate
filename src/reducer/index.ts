import { IState, IAction } from "types";

export const initialState: IState = {};

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    default:
      return state;
  }
}
