import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './models/task.model';

@Pipe({
    name: "completeness",
    pure: false
})

export class CompletenessPipe implements PipeTransform {
    var output: Task[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].done === false) {
        output.push(input[i]);
      }
    }
    return output;
      }
}