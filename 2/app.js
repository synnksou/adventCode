const file = require("./input");

puzzle1 = () => {
  let count = 0;
  file.forEach((element) => {
    const words = element.split(/:|-| /).filter((item) => item),
      min = words[0],
      max = words[1],
      char = words[2],
      str = words[3],
      countChar = str.split(char).length - 1;
    if (countChar >= min && countChar <= max) {
      count += 1;
    }
  });

  return count;
};

puzzle2 = () => {
  let count = 0;
  file.forEach((element) => {
    const words = element.split(/:|-| /).filter((item) => item),
      min = words[0],
      max = words[1],
      char = words[2],
      str = words[3];
    if ((str.charAt(min - 1) === char) !== (str.charAt(max - 1) === char)) {
      count += 1;
    }
  });

  return count;
};

console.log(puzzle1());
console.log(puzzle2());
