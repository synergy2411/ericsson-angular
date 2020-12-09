import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(todoList: any, filteredStatus: string): any {

    console.log('[TRANSFORM]');

    if (todoList.length === 0 || filteredStatus === '') {
      return todoList;
    }

    const resultArray = [];
    for (const todo of todoList) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
