import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  unSub : Subscription;
  packages : string[] = [];
  obsData$ = new Observable(observer => {

    // observer.next("First")
    // observer.next("Second")
    // observer.next("Third")
    // observer.next("Forth")

    setTimeout( () => { observer.next('First Package') } , 1000);
    setTimeout( () => { observer.next('Second Package') } , 2000);
    setTimeout( () => { observer.next('Third Package') } , 4000);
    setTimeout( () => { observer.next('Forth Package') } , 5000);
    // setTimeout( () => { observer.error(new Error('Something bad happened'))} , 5000);
    setTimeout( () => { observer.next('Fifth Package') } , 7000);
    setTimeout( () => { observer.complete() } , 8000);

  })

  constructor() { }

  ngOnInit() {
  }

  onSubscribe(){
    this.unSub = this.obsData$
      .pipe(map(pkg => "My " + pkg))
      .pipe(tap(val => {
      console.log("[TAP]", val);
      return val;
    })).pipe(take(2))
      .subscribe(
      (data:string) => {
        console.log(data);
        this.packages.push(data);
      },
      (err) => {console.log(err)},
      () => {console.log('Completed')}
    )
  }

  onUnsubscribe(){
    this.unSub.unsubscribe();

  }

}
