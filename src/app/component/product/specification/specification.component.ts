import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    // snapshot of URL
    console.log(this.route.snapshot.queryParams);

    // Observable consume - keep an eye on data-source
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }

}
