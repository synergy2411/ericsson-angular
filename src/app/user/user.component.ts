import { DataService } from './../services/data.service';
// import { USER_DATA } from './../model/mocks';
import { User } from './../model/user.model';
import { AfterContentChecked } from '@angular/core';
import { Component, Input, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector : 'app-user',
  templateUrl : './user.component.html',
  styleUrls : ['./user.component.css']
})
export class UserComponent implements
// OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
OnInit {

  @Input() title: string;

  users: User[];

  constructor(private dataService: DataService) { }

  public onMoreInfo(user: User): void {
    alert(`Mr. ${user.lastName}, is working with ${user.company}!`);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes);
  // }

  ngOnInit() {
    // console.log('ngOnInit');
    // this.users = USER_DATA;
    // this.users = this.dataService.getData();
    // this.dataService.getLocalJsonUserData()
    //   .subscribe(data => this.users = <User[]> data);
    this.dataService.getRemoteJsonUserData()
      .subscribe(data => this.users = <User[]> data)
  }
  ngDoCheck() {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }


}



//  ng serve --port=4300
