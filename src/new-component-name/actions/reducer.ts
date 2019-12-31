import { IState, IAction } from "../types";

export function updateValue(state: IState, action: IAction) {
  return { ...state, value: action.value! };
}
