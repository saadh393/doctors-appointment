const { default: mongoose } = require("mongoose");

const doctorSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  active: Boolean,
  password: {
    type: String,
    require: true
  },
  date_of_birth: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  woring_period: {
    start: Date,
    end: Date
  },
  expertise: [String],
  photo: String,
  designation: String

});

/**
 * Checks if a doctor with a given email exists.
 *
 * @param {string} email - The email address to check.
 * @returns {Promise<boolean>} A promise that resolves to true if a doctor with the specified email exists, or false otherwise.
 */
doctorSchema.statics.ifExist = async function (email) {
  const doctor = await this.findOne({ email });
  console.log(doctor);
  return !!doctor;
}

/**
 * Checks if a doctor is active based on their ID.
 *
 * @param {string} id - The unique identifier of the doctor.
 * @returns {Promise<boolean>} A promise that resolves to true if the doctor is active, or false if not found or not active.
 */
doctorSchema.statics.isDoctorActive = async function (id) {
  const doctor = await this.findOne({ id: mongoose.ObjectId(id) })
  return !!doctor.active;
}

/**
 * Setting Doctor Active
 * @param {String} id
 * @returns {Promise}
 * **/
doctorSchema.statics.setActive = async function (id) {
  const doctor = await this.findOne({ id: mongoose.ObjectId(id) });
  doctor.active = true;
  return await doctor.save();
}

/**
 * Retrieves a doctor by their ID.
 *
 * @param {string} id - The unique identifier of the doctor.
 * @returns {Promise<Doctor|null>} A promise that resolves to the doctor object if found, or null if not found.
 */
doctorSchema.statics.getDoctor = async function (id) {
  return await this.findOne({ id: mongoose.ObjectId(id) });
}


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;