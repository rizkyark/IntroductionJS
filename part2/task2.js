const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (character, limit, callback) => {
  const result = name.filter(function (changeCharacter) {
    return changeCharacter.toLowerCase().indexOf(character.toLowerCase()) >= 0;
  });
  callback(result, limit);
};

function callback(value, limit) {
  if (typeof limit === "number") {
    return console.log(value.slice(0, limit));
  } else {
    return console.log(
      `Value limit ${limit} yang anda masukan bukan type data Number, melainkan bernilai ${typeof limit}`
    );
  }
}

searchName("an", "3", callback);
