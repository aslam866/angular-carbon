import { MycurrencyPipe } from './mycurrency.pipe';

describe('MycurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new MycurrencyPipe();
    expect(pipe).toBeTruthy();
    const result = pipe.transform(1, 70);
    expect(result).toBe(70);
  });
  it("pipe should throw error if transform(null)", () => {
    const pipe = new MycurrencyPipe();
    try {
      const result1 = pipe.transform();
    } catch (error) {
      console.log(error);
      expect(error).toBeTruthy();
    }
  });
  
});
