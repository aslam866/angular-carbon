import { MillisecondPipe } from './millisecond.pipe';

describe('MillisecondPipe', () => {
  it('create an instance', () => {
    const pipe = new MillisecondPipe();
    expect(pipe).toBeTruthy();
    const milliResult=pipe.transform(1000);
     expect(milliResult).toBe(0);
  });
});
