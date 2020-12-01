const arrayInput = require("./input");

function puzzleOne() {
  let arrayResult = [];
  arrayInput.forEach((firstEntry) => {
    arrayInput.forEach((secondEntry) => {
      if (firstEntry + secondEntry === 2020) {
        if (!arrayResult.includes(firstEntry * secondEntry)) {
          arrayResult.push(firstEntry * secondEntry);
        }
      }
    });
  });
  console.log(arrayResult);
}

function puzzleTwo() {
  let arrayResult = [];
  arrayInput.forEach((firstEntry) => {
    arrayInput.forEach((secondEntry) => {
      arrayInput.forEach((threeEntry) => {
        if (firstEntry + secondEntry + threeEntry  === 2020) {
          if (!arrayResult.includes(firstEntry * secondEntry * threeEntry)) {
            arrayResult.push(firstEntry * secondEntry * threeEntry );
          }
        }
      });
    });
  });
  console.log(arrayResult);
}

puzzleOne();
puzzleTwo();
