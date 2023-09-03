// Easy Pipe

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyComputationPipe } from './heavy-computation.pipe';

//<div *ngFor="let person of persons; let index = index">
//  {{ heavyComputation(person, index) }}
//</div>

@Component({
  standalone: true,
  imports: [NgFor, HeavyComputationPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | heavyComputation:index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack', 'dorothy'];

  // heavyComputation can be deleted 

  // heavyComputation(name: string, index: number) {
  // very heavy computation
  // return `${name} - ${index}`;
  // }
}

/*
// Intermediate Pipe

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { WrapFnPipe } from './wrap-fn.pipe';

@Component({
  standalone: true,
  imports: [NgFor, WrapFnPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index; let isFirst = first">
      {{ showName | wrapFn : person.name : index }}
      {{ isAllowed | wrapFn : person.age : isFirst }}
    </div>
  `,
})
export class AppComponent {
  persons = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];

  showName(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }

  isAllowed(age: number, isFirst: boolean) {
    if (isFirst) {
      return 'always allowed';
    } else {
      return age > 25 ? 'allowed' : 'declined';
    }
  }
}
*/

/*
// Hard Pipe

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PersonUtilsPipe } from "./person-utils.pipe";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div *ngFor="let activity of activities">
      {{ activity.name }} :
      <div
        *ngFor="let person of persons; let index = index; let isFirst = first">
        {{  person.name | personUtils : 'showName' : index }}
        {{ person.age | personUtils: 'isAllowed' : isFirst : activity.minimumAge }}
      </div>
    </div>
  `,
  imports: [NgFor, PersonUtilsPipe]
})
export class AppComponent {
  persons = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];

  activities = [
    { name: 'biking', minimumAge: 12 },
    { name: 'hiking', minimumAge: 25 },
    { name: 'dancing', minimumAge: 1 },
  ];

  //showName = PersonUtils.showName;
  //isAllowed = PersonUtils.isAllowed;
}
*/