import { Customer } from './customer.model';

describe('Customers', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
