const { AppointmentSlots } = require('./AppointmentSlots');

describe('AppointmentSlots', () => {
  const working_periods = [
    {
      day: 'Monday',
      start: '9:00 AM',
      end: '5:00 PM'
    },
    {
      day: 'Tuesday',
      start: '9:00 AM',
      end: '5:00 PM'
    },
    {
      day: 'Wednesday',
      start: '9:00 AM',
      end: '5:00 PM'
    },
    {
      day: 'Thursday',
      start: '9:00 AM',
      end: '5:00 PM'
    },
    {
      day: 'Friday',
      start: '9:00 AM',
      end: '5:00 PM'
    }
  ];

  it('should return an array of available time slots for a given date and working period', () => {
    const date = '2023-10-02';
    const expected = [
      { start: '9:00:00 AM', end: '9:10:00 AM' },
      { start: '9:10:00 AM', end: '9:20:00 AM' },
      { start: '9:20:00 AM', end: '9:30:00 AM' },
      { start: '9:30:00 AM', end: '9:40:00 AM' },
      { start: '9:40:00 AM', end: '9:50:00 AM' },
      { start: '9:50:00 AM', end: '10:00:00 AM' },
      { start: '10:00:00 AM', end: '10:10:00 AM' },
      { start: '10:10:00 AM', end: '10:20:00 AM' },
      { start: '10:20:00 AM', end: '10:30:00 AM' },
      { start: '10:30:00 AM', end: '10:40:00 AM' },
      { start: '10:40:00 AM', end: '10:50:00 AM' },
      { start: '10:50:00 AM', end: '11:00:00 AM' },
      { start: '11:00:00 AM', end: '11:10:00 AM' },
      { start: '11:10:00 AM', end: '11:20:00 AM' },
      { start: '11:20:00 AM', end: '11:30:00 AM' },
      { start: '11:30:00 AM', end: '11:40:00 AM' },
      { start: '11:40:00 AM', end: '11:50:00 AM' },
      { start: '11:50:00 AM', end: '12:00:00 PM' },
      { start: '12:00:00 PM', end: '12:10:00 PM' },
      { start: '12:10:00 PM', end: '12:20:00 PM' },
      { start: '12:20:00 PM', end: '12:30:00 PM' },
      { start: '12:30:00 PM', end: '12:40:00 PM' },
      { start: '12:40:00 PM', end: '12:50:00 PM' },
      { start: '12:50:00 PM', end: '1:00:00 PM' },
      { start: '1:00:00 PM', end: '1:10:00 PM' },
      { start: '1:10:00 PM', end: '1:20:00 PM' },
      { start: '1:20:00 PM', end: '1:30:00 PM' },
      { start: '1:30:00 PM', end: '1:40:00 PM' },
      { start: '1:40:00 PM', end: '1:50:00 PM' },
      { start: '1:50:00 PM', end: '2:00:00 PM' },
      { start: '2:00:00 PM', end: '2:10:00 PM' },
      { start: '2:10:00 PM', end: '2:20:00 PM' },
      { start: '2:20:00 PM', end: '2:30:00 PM' },
      { start: '2:30:00 PM', end: '2:40:00 PM' },
      { start: '2:40:00 PM', end: '2:50:00 PM' },
      { start: '2:50:00 PM', end: '3:00:00 PM' },
      { start: '3:00:00 PM', end: '3:10:00 PM' },
      { start: '3:10:00 PM', end: '3:20:00 PM' },
      { start: '3:20:00 PM', end: '3:30:00 PM' },
      { start: '3:30:00 PM', end: '3:40:00 PM' },
      { start: '3:40:00 PM', end: '3:50:00 PM' },
      { start: '3:50:00 PM', end: '4:00:00 PM' },
      { start: '4:00:00 PM', end: '4:10:00 PM' },
      { start: '4:10:00 PM', end: '4:20:00 PM' },
      { start: '4:20:00 PM', end: '4:30:00 PM' },
      { start: '4:30:00 PM', end: '4:40:00 PM' },
      { start: '4:40:00 PM', end: '4:50:00 PM' },
      { start: '4:50:00 PM', end: '5:00:00 PM' }
    ];

    expect(AppointmentSlots(working_periods, date)).toEqual(expected);
  });

  it('should throw an error if start time is missing in the working period', () => {
    const date = '2022-01-04';
    const invalidWorkingPeriod = [
      {
        day: 'Tuesday',
        end: '5:00 PM'
      }
    ];

    expect(() => AppointmentSlots(invalidWorkingPeriod, date)).toThrow('Start Time Missing');
  });

  it('should throw an error if end time is missing in the working period', () => {
    const date = '2022-01-05';
    const invalidWorkingPeriod = [
      {
        day: 'Wednesday',
        start: '9:00 AM'
      }
    ];

    expect(() => AppointmentSlots(invalidWorkingPeriod, date)).toThrow('End Time Missing');
  });

  it('should throw an error if doctor is not available on the proposed day', () => {
    const date = '2023-10-01';

    expect(() => AppointmentSlots(working_periods, date)).toThrow('Doctor is not available on sunday');
  });
});