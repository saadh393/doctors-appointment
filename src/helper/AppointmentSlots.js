/**
 * @typedef {Object} WorkingPeriod
 * @property {String} day - The day of the week ("Monday", "Tuesday", etc.).
 * @property {String} start - The start time of the working period.
 * @property {String} end - The end time of the working period.
 */

/**
 * Returns an array of available time slots for a given date and working period.
 * @param {Array<WorkingPeriod>} working_periods - An array of working periods for a doctor.
 * @param {String} date - A string representing the date in "YYYY-MM-DD" format.
 * @returns {Array} - An array of available time slots for the given date and working period.
 * @throws {Error} - If start or end time is missing in the working period.
 */
module.exports.AppointmentSlots = (working_periods, date) => {

  const APPOINTMENT_SESSION_DURATION = parseInt(process.env.PER_APPOINTMENT_MINUTES) || 10;
  const SIXTY_SECOND_IN_MILISECONDS = 1000 * 60;

  const proposedDay = new Date(date).toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
  const selectedWorkingPeriod = working_periods.find(days => days.day.toLowerCase() == proposedDay) || (() => { throw new Error("Doctor is not available on " + proposedDay); })();

  let startTime = selectedWorkingPeriod?.start ? new Date(`'${date} ${selectedWorkingPeriod.start}'`) : (() => { throw new Error("Start Time Missing"); })();
  let endTime = selectedWorkingPeriod?.end ? new Date(date + " " + selectedWorkingPeriod.end) : (() => { throw new Error("End Time Missing"); })();

  const availableTimeSlot = [];

  let loop = true;
  while (loop) {
    const sessionStart = startTime;
    const sessionEnd = new Date(sessionStart.getTime() + SIXTY_SECOND_IN_MILISECONDS * APPOINTMENT_SESSION_DURATION)

    if (sessionEnd > endTime) {
      loop = false;
      break;
    }

    availableTimeSlot.push(
      {
        start: sessionStart.toLocaleTimeString(),
        end: sessionEnd.toLocaleTimeString()
      }
    )
    startTime = sessionEnd
  }

  return availableTimeSlot;
}