const Doctor = require("../model/Doctor.model");

const createDoctor = async (doctorData) => {
  if (await Doctor.ifExist(doctorData.email)) {
    throw new Error("Doctor already Exist");
  }
  return await Doctor.create(doctorData);
};

module.exports.doctorService = {
  createDoctor,
};