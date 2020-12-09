import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  contact_no = 9876541212;

  data$ = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('success')
    }, 3000);

    // make XHR Call - 2S
  });

  constructor() { }

  ngOnInit() {
  }

}
