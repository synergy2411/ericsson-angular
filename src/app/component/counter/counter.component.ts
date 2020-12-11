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
  constructor(private store : Store<any>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      console.log('[STATE]', state);
      this.counter = state.reducer.counter;
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
    // this.store.dispatch({ type : counterActions.SUBTRACT_NUMBER});
  }

}

// npm install @ngrx/store --save
