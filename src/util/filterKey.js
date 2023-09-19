module.exports = (obj, ...args) => {
  const object = obj.toObject();
  delete object.firstName;

  console.log(object)
}