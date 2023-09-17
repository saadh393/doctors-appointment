const DoctorModel = require("../model/Doctor.model");

const profile = async (req, res) => {
  const id = req.body.id
  const doctorProfile = await DoctorModel.getDoctor(id);

  res.json(doctorProfile || { message: "Not Found" })
};

const all = async (req, res) => {
  const doctorsList = await DoctorModel.getAllDoctors();
  console.log(doctorsList)
  res.json(doctorsList || { message: "Not Found" });
};

const active = (req, res) => { };
const inactive = (req, res) => { };

module.exports.DoctorController = {
  profile,
  all,
  active,
  inactive
}