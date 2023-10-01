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
  active: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    require: true,
    select: false
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
  working_period: [
    {
      day: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      start: String,
      end: String

    }
  ],
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
  return !!doctor;
}

/**
 * Checks if a doctor is active based on their ID.
 *
 * @param {string} id - The unique identifier of the doctor.
 * @returns {Promise<boolean>} A promise that resolves to true if the doctor is active, or false if not found or not active.
 */
doctorSchema.statics.isDoctorActive = async function (id) {
  const doctor = await this.findOne({ _id: id })
  return !!doctor.active;
}

/**
 * Setting Doctor Active
 * @param {String} id
 * @returns {Promise}
 * **/
doctorSchema.statics.setActive = async function (id) {
  const doctor = await this.findOne({ _id: id });
  doctor.active = true;
  return await doctor.save();
}

/**
 * Setting Doctor Disable
 * @param {String} id
 * @returns {Promise}
 * **/
doctorSchema.statics.setInactive = async function (id) {
  const doctor = await this.findOne({ _id: id });
  doctor.active = false;
  return await doctor.save();
}

/**
 * Retrieves a doctor by their ID.
 *
 * @param {string} id - The unique identifier of the doctor.
 * @returns {Promise<Doctor|null>} A promise that resolves to the doctor object if found, or null if not found.
 */
doctorSchema.statics.getDoctor = async function (email) {
  return await this.findOne({ email }).select("-__v _id");
}


/**
 * Retrieves All doctors who are acctive
 *
 * @returns {Promise<Doctor|null>} A promise that resolves to the doctor object if found, or null if not found.
 */
doctorSchema.statics.getAllDoctors = async function () {
  return await this.find({ active: true })
}

doctorSchema.methods.filterKey = function (...args) {
  const userObject = this.toObject();
  args.forEach(arg => delete userObject[arg]);

  return userObject;
}


const DoctorModel = mongoose.model('Doctor', doctorSchema);

module.exports = DoctorModel;