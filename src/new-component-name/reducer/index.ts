import { IState, IAction } from "../types";
import { UPDATE_VALUE } from "../constants/actionTypes";
import { updateValue } from "../actions/reducer";

export const initialState: IState = {
  value: 0,
};

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case UPDATE_VALUE:
      return updateValue(state, action);
    default:
      return state;
  }
}
