import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyText'
})
export class ModifyTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (args[0] == 'movies')
      args[0] = 'movie';
    else if (args[0] == 'series')
      args[0] = 'series';
    else if (args[0] == 'episodes')
      args[0] = 'episode';
    
    return value + " " + args[0];
  }

}
