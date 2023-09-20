const DuplicateChecker = (arr) => {
  const days = arr.map(item => item.day);
  const uniqueSize = new Set(days).size;
  return !(days.length === uniqueSize);  
}

module.exports = DuplicateChecker