const DoctorModel = require("../model/Doctor.model");

const profile = async (req, res) => {
  const id = req.body.id;
  const doctorProfile = await DoctorModel.getDoctor(id);

  res.json(doctorProfile || { message: "Not Found" });
};

const all = async (req, res) => {
  const doctorsList = await DoctorModel.getAllDoctors();
  res.json(doctorsList || { message: "Not Found" });
};

const active = async (req, res) => {
  const id = req.body.id;
  const response = await DoctorModel.setActive(id);

  res.json({ message: response ? "Operation Successful" : "Something went wrong" });
};

const inactive = async (req, res) => {
  const id = req.body.id;
  const response = await DoctorModel.setInactive(id);

  res.json({ message: response ? "Operation Successful" : "Something went wrong" });
};

const update = async (req, res) => {

}

module.exports.DoctorController = {
  profile,
  all,
  active,
  inactive,
  update
};
