import { WrapFnPipe } from './wrap-fn.pipe';
import { PersonUtils } from './person.utils';

let pipe: WrapFnPipe;

beforeEach(() => {
  pipe = new WrapFnPipe();
})

describe('WrapFnPipe', () => {
  it('create an instance', () => {
    const pipe = new WrapFnPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform value with showName', () => {
    const name = 'Jim';
    const index = 6;
    const expectedOutput = 'Jim - 6';
    expect(pipe.transform(PersonUtils.showName, name, index)).toEqual(expectedOutput);
  });

  it('should transform value with isAllowed first', () => {
    const age = 15;
    const isFirst = true;
    const activityAge = 25;
    const expectedOutput = 'always allowed';
    expect(pipe.transform(PersonUtils.isAllowed, age, isFirst, activityAge)).toEqual(expectedOutput);
  });

  it('should transform value with isAllowed allowed', () => {
    const age = 25;
    const isFirst = false;
    const activityAge = 15;
    const expectedOutput = 'allowed';
    expect(pipe.transform(PersonUtils.isAllowed, age, isFirst, activityAge)).toEqual(expectedOutput);
  });

  it('should transform value with isAllowed declined', () => {
    const age = 15;
    const isFirst = false;
    const activityAge = 25;
    const expectedOutput = 'declined';
    expect(pipe.transform(PersonUtils.isAllowed, age, isFirst, activityAge)).toEqual(expectedOutput);
  });

});
