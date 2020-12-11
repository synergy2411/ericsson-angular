import { Action } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions';


const initialState = {
  counter :0
}
export function rootReducer(state = initialState, action : counterActions.CounterType) {
  switch (action.type) {
    case counterActions.INCREMENT: return {
      ...state,
      counter : state.counter + 1
    }
    case counterActions.DECREMENT: return {
      ...state,
      counter : state.counter -1
      }
    case counterActions.ADD_NUMBER: return {
      ...state,
      counter : state.counter + action.value
    }
    // case counterActions.SUBTRACT_NUMBER: return {
    //   ...state,
    //   counter : state.counter + 1
    // }
    default:
      return state;
  }
}


// npm install ng2-charts chart.js --save
