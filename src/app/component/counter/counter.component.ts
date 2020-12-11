import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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

}

// npm install @ngrx/store --save
