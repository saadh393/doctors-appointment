/**
 * Validates if the proposed date is valid for the given doctor's working period.
 * @param {string} _date - The proposed date for the appointment in string format.
 * @param {Object} doctor - The doctor object containing the doctor's information.
 * @param {string} doctor.firstName - The first name of the doctor.
 * @param {string} doctor.lastName - The last name of the doctor.
 * @param {Array} doctor.working_period - The working period of the doctor, containing objects with day and time properties.
 * @returns {boolean} - Returns true if the proposed date is valid for the given doctor's working period.
 * @throws {Error} - Throws an error if the proposed date is not valid or the doctor is not available on the proposed day.
 */
module.exports.WorkingPeriodValidate = (_date, doctor) => {
  const proposedDate = new Date(_date);
  const proposedDay = proposedDate.toLocaleString('en-us', {weekday : 'long'}).toLowerCase();
  const doctorsAvailabeDays = doctor.working_period.map(day => day.day.toLowerCase());
  const MAX_BOOKING_DATE = maxBookingDate();
  
  if(new Date() > proposedDate || proposedDate > MAX_BOOKING_DATE){
    throw new Error("Please Select an Appropiate Date");
  }

  if(!doctorsAvailabeDays.includes(proposedDay)){
    throw new Error(`Dr. ${doctor.firstName} ${doctor.lastName} is not Available on this day`)
  }

  return true;
}

/**
 * Calculates the maximum booking date based on the APPOINTMENT_BOOKING_PERIOD environment variable.
 * @returns {Date} - Returns the maximum booking date.
 */
const maxBookingDate = () => {
  const APPOINTMENT_BOOKING_PERIOD = parseInt(process.env.APPOINTMENT_BOOKING_PERIOD) || 7;

  const date = new Date();
  const currentDate = date.getDate() + APPOINTMENT_BOOKING_PERIOD;
  date.setDate(currentDate);

  return date;
}