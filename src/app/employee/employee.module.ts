import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations :    [NewEmployeeComponent],
  imports      :    [CommonModule],
  providers :       [],
  exports :         [NewEmployeeComponent]        // can export component, directives, pipes
})
export class EmployeeModule{

}
