import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goal'
})
export class GoalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
