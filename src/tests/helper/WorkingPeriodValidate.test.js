const { WorkingPeriodValidate } = require('../../helper/WorkingPeriodValidate');

const doctor = {
  firstName: 'John',
  lastName: 'Doe',
  working_period: [
    { day: 'Monday', time: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
    { day: 'Friday', time: '9:00 AM - 5:00 PM' }
  ]
};

describe('WorkingPeriodValidate', () => {
  test('should return true if the proposed date is valid for the given doctor', () => {
    const date = '2023-10-02'; // Monday
    expect(WorkingPeriodValidate(date, doctor)).toBe(true);
  });

  test('should throw an error if the proposed date is not valid', () => {
    const date = '2021-12-31'; // Friday (not within the booking period)
    expect(() => WorkingPeriodValidate(date, doctor)).toThrow('Please Select an Appropiate Date');
  });

  test('should throw an error if the doctor is not available on the proposed day', () => {
    const date = '2023-10-03'; // Tuesday (not available)
    expect(() => WorkingPeriodValidate(date, doctor)).toThrow(`Dr. ${doctor.firstName} ${doctor.lastName} is not Available on this day`);
  });
});