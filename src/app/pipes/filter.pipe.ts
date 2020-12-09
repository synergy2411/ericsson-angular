import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todoList : any, filteredStatus : string): any {

    if(todoList.length === 0 || filteredStatus === ''){
      return todoList;
    }

    const resultArray = [];
    for(const todo of todoList){
      if(todo['status'] === filteredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
