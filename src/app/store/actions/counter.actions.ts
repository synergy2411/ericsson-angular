export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_NUMBER = 'ADD_NUMBER';
export const SUBTRACT_NUMBER = 'SUBTRACT_NUMBER';

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

export type CounterType = Increment | Decrement | AddNumber;
