const divideAndSort = (num) => {
  if (typeof num !== "number") {
    console.log(
      `Input ${num} salah, data yang anda input berupa ${typeof number}! data harus berupa number`
    );
  } else {
    const splitNum = num.toString().split(0);
    let res = [];
    for (let i = 0; i <= splitNum.length - 1; i++) {
      res =
        res +
        splitNum[i]
          .split("")
          .sort((a, b) => a - b)
          .join("");
    }
    const mergeNum = parseInt(res);
    return console.log(mergeNum);
  }
};
divideAndSort(5956560159466056);
