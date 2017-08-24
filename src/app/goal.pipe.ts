import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'goal'
})
export class GoalPipe implements PipeTransform {

  transform(input: Project[], desiredGoal) {
    var output: Project[] = [];
    if(desiredGoal === "under2500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal < 2500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGoal === "under10000") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal < 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
