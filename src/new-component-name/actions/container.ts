import { UPDATE_VALUE } from "../constants/actionTypes";
import { IContext } from "../types";
import { getValue } from "./";

export default function getActions({ state, dispatch }: IContext) {
  return {
    updateValue: (value: number) => {
      dispatch({ type: UPDATE_VALUE, value });
    },
    getValue: () => getValue(state),
  };
}
