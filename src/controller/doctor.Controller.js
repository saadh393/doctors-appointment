const DoctorModel = require("../model/Doctor.model");
const DuplicateChecker = require("../util/DuplicateWorkingDays");

const profile = async (req, res) => {
  const email = req.headers.user.email;
  const doctorProfile = await DoctorModel.getDoctor(email);
  res.json(doctorProfile || { message: "Doctor Not Found" });
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
  const {  id } = req.headers.user;
  const data = req.body
  
  if(data.hasOwnProperty('working_period') && DuplicateChecker(data.working_period)){
    throw Error("Duplicate Days Entry");
  }

  const response = await DoctorModel.updateOne({ _id: id }, { $set: { ...data } });
  res.json(response)
}

module.exports.DoctorController = {
  profile,
  all,
  active,
  inactive,
  update
};
