import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true
})
export class WrapFnPipe implements PipeTransform {

  transform(func: (...arg: any[]) => string, ...args: any[]): string {
    return func(...args);
  }

}
