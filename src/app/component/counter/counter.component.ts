import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number = null;
  result : number[];
  constructor(private store : Store<any>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      console.log('[STATE]', state);
      this.counter = state.reducer.counter;
      this.result = <number[]>[...state.reducer.result];
    })
  }

  onIncrement(){
    this.store.dispatch({ type : counterActions.INCREMENT});
  }
  onDecrement(){
    // this.store.dispatch({ type : counterActions.DECREMENT});
    this.store.dispatch(new counterActions.Decrement());
  }
  onAddNumber(value : number){
    this.store.dispatch(new counterActions.AddNumber(value));
  }
  onSubtractNumber(value : number){
    this.store.dispatch(new counterActions.SubtractNumber(value));
  }
  onStoreResult(){
    this.store.dispatch(new counterActions.StoreResult());
  }
  onDeleteItem(idx : number){
    console.log('[INDEX]', idx);
    this.store.dispatch(new counterActions.DeleteResult(idx));
  }
}

// npm install @ngrx/store --save
