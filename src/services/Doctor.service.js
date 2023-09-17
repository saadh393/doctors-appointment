const Doctor = require("../model/Doctor.model");
const bcrypt = require('bcrypt')

const createDoctor = async (doctorData) => {
  if (await Doctor.ifExist(doctorData.email)) {
    throw new Error("Doctor already Exist");
  }
  return await Doctor.create({
    ...doctorData,
    password : await bcrypt.hash(doctorData.password, 10)
  });
};

module.exports.doctorService = {
  createDoctor,
};