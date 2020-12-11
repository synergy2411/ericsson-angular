import { CounterType } from './counter.actions';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_NUMBER = 'ADD_NUMBER';
export const SUBTRACT_NUMBER = 'SUBTRACT_NUMBER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action Creator - can carry payload data

export class Increment{
  readonly type = INCREMENT;
  constructor(){}
}

export class Decrement{
  readonly type = DECREMENT;
  constructor() {}
}

export class AddNumber{
  readonly type = ADD_NUMBER;
  constructor(public value : number){}
}

export class SubtractNumber{
  readonly type = SUBTRACT_NUMBER;
  constructor(public value : number){}
}

export class StoreResult {
  readonly type = STORE_RESULT;
}

export class DeleteResult{
  readonly type = DELETE_RESULT;
  constructor(public index : number){}
}

export type CounterType = Increment | Decrement |
                          AddNumber | SubtractNumber | StoreResult |
                          DeleteResult;
