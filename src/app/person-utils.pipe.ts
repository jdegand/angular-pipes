import { Pipe, PipeTransform } from '@angular/core';
import { PersonUtils } from './person.utils';

/*

// This is left over from exploring this [solution](https://github.com/tomalaforge/angular-challenges/pull/32)
// No way to use args 

@Pipe({
  name: 'personUtils',
  standalone: true
})
export class PersonUtilsPipe implements PipeTransform {

    transform(
    value: any,
    functionName: 'showName' | 'isAllowed', // make enum with all allowed functions?
    ...args: any
  ): string {
    return PersonUtils[functionName](value, ...args); // would have to change PersonUtil function signatures ?
    // and those functions might not be able to be typed
  }
}
*/

export type PersonUtilFunctionName = keyof typeof PersonUtils;

export type Params<T extends PersonUtilFunctionName> = Parameters<typeof PersonUtils[T]>;

// should FirstArg use an array of args? 
// Just used this way so you can reuse Params?
export type FirstArg<Y> = Y extends [infer First, ...unknown[]] ? First : never;
export type LastArgs<Y> = Y extends [unknown, ...infer Rest] ? Rest : never;

@Pipe({
  name: 'personUtils',
  standalone: true,
})
export class PersonUtilsPipe implements PipeTransform {
  transform<T extends PersonUtilFunctionName>(
    value: FirstArg<Params<T>>,
    functionName: T,
    ...args: LastArgs<Params<T>>
  ): ReturnType<typeof PersonUtils[T]> {
    return (PersonUtils[functionName] as Function)(value, ...args);
  }
}