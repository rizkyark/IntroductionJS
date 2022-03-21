// 1
let checkTypeData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") {
        resolve(`Data ${typeof data} ${data} valid !`);
      } else {
        reject(new Error(`Data invalid! ${data} adalah tipe data ${typeof data}!`));
      }
    }, 1000);
  });
};

checkTypeData("2")
  .then((result) => console.log(`${result}`))
  .catch((reject) => console.log(`${reject}`));

// 2
// const decreaseItemStock = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const item = { name: "Item1", stock: 14 };

//       let someoneHasBought = true;

//       if (someoneHasBought) {
//         resolve(item);
//       } else {
//         reject(
//           new Error("We still have " + item.stock + " items in our warehouse")
//         );
//       }
//     }, 1000);
//   });
// };

// decreaseItemStock()
//   .then((item) => {
//     item.stock -= 1;
//     console.log(item);
//   })
//     .catch((error) => console.log(error.message));



