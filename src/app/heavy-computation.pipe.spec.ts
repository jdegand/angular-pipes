import { HeavyComputationPipe } from './heavy-computation.pipe';

let pipe: HeavyComputationPipe;

beforeEach(() => {
  pipe = new HeavyComputationPipe();
})

describe('HeavyComputationPipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform value', () => {
    const name = 'Jim';
    const index = 6;
    const expectedOutput = 'Jim - 6';
    expect(pipe.transform(name, index)).toEqual(expectedOutput);
  });

});
