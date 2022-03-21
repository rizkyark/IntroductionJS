function checkPalindrome(word) {
  let newWord = word.replace(/[^0-9a-z]/gi, "").toLowercase();
  let result = "";

  if (word.length <= 3) {
    return console.log("Karakter Harus lebih dari 3 huruf");
  }
  if (typeof word != "string") {
    return console.log("Input harus berupa string");
  }

  for (x = word.length - 1; x >= 0; x--) {
    if (x >= 0) {
      result = result + newWord[x];
    }
  }

  if (result === newWord) {
    return console.log(word + " Palindrom");
  } else {
    return console.log(word + " Bukan Palindrom");
  }
}

console.log(checkPalindrome("malam"));
