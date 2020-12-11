import { Action } from "@ngrx/store";
import * as counterActions from "../actions/counter.actions";

const initialState = {
  counter: 0,
  result: [],
};
export function rootReducer(
  state = initialState,
  action: counterActions.CounterType
) {
  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case counterActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case counterActions.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case counterActions.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case counterActions.STORE_RESULT: {
      return {
        ...state,
        result: [...state.result, state.counter],
      };
    }
    case counterActions.DELETE_RESULT: {
      const duplicateResult = state.result.filter((value, index, array)=> index!==action.index )
      return {
        ...state,
        result : [...duplicateResult]
      }
    }
    default:
      return state;
  }
}

// npm install ng2-charts chart.js --save
