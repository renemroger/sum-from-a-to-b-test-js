
const sum = function(fromN, toN) {
  let add = 0;
  if (fromN > toN) {
    return add;
  } else {
    add = fromN;
  }
  return add + sum(fromN + 1, toN);
};
module.exports = sum;
