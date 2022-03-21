// const nama = "nama saya rizky"

function invertWord (word) {
  let newWord = word.split(" ");
  let result = "";

  if (typeof word != "string") {
    return console.log("Input harus berupa string");
  }

  for (x = newWord.length - 1; x >= 0; x--) {
    result += newWord[x] + " ";
  }

  return result;
};

console.log(invertWord("Saya Belajar Javascript"));
// console.log(nama.split(" "))
