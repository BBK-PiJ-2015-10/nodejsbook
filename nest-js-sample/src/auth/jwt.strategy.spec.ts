import { JwtStrategy } from './jwt.strategy.ts';

describe('JwtStrategy', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
