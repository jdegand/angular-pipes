import { PersonUtilsPipe } from './person-utils.pipe';

let pipe: PersonUtilsPipe;

beforeEach(() => {
  pipe = new PersonUtilsPipe();
})

describe('PersonUtilsPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonUtilsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform value with showName', () => {
    const name = 'Jim';
    const index = 6;
    const expectedOutput = 'Jim - 6';
    expect(pipe.transform(name, 'showName', index)).toEqual(expectedOutput);
  });

});
