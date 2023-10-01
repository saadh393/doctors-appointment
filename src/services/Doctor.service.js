const Doctor = require("../model/Doctor.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createDoctor = async (doctorData) => {
  if (await Doctor.ifExist(doctorData.email)) {
    throw new Error("Doctor already Exist");
  }
  const doctor = await Doctor.create({
    ...doctorData,
    password: await bcrypt.hash(doctorData.password, 10)
  })
  return doctor.filterKey("password");
};

const update = async (user) => {

}

const getDoctorById = async (doctor_id) => {
  return await Doctor.find({ _id: doctor_id });
}



module.exports.DoctorService = {
  createDoctor,
  update,
  getDoctorById
};