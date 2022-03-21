// 1. toLowerCase()
// Method untuk merubah string menjadi huruf kecil semua
const string = "nAmA SaYa rIzKy";
console.log(`1. Contoh method toLowerCase: ${string.toLowerCase()}`);

// 2. toUpperCase()
// Method untuk merubah string menjadi huruf besar semua
const string1 = "nAmA SaYa rIzKy";
console.log(`2. Contoh method toUpperCase: ${string1.toLocaleUpperCase()}`);

// 3. push()
// Method object array yang digunakan untuk menambah elemen baru di akhir array dan me-return panjang array yang sudah di push
const num2 = [1, 2, 3, 4, 5];
num2.push(6, 7);
console.log(`3. Contoh method push: ${num2}`);

//  4. slice()
// Method yang digunakan untuk memotong iterable object seperti string dan array di index ke-n sampai index ke-n, jika parameter kedua tidak diisi maka akan mencetak hingga index akhir.
const num1 = [1, 2, 3, 4, 5];
console.log(`4. Contoh method slice: ${num1.slice(0, 2)}`);

// 5. pop()
// Method object array yang digunakan untuk menghapus elemen di akhir array dan me-return nilai elemen yang dihapus
const num3 = [1, 2, 3, 4, 5];
num3.pop();
console.log(`5. Contoh method pop: ${num3}`);

// 6. shift()
// Method object array yang digunakan untuk menghapus elemen pertama array dan me-return nilai elemen yang dihapus
const num4 = [1, 2, 3, 4, 5];
num4.shift();
console.log(`6. Contoh method shift: ${num4}`);

// 7. unshift()
// Method object array yang digunakan untuk menambah elemen baru di awal array dan me-return panjang array yang sudah di unshift
const num5 = [1, 2, 3, 4, 5];
num5.unshift(0);
console.log(`7. Contoh method unshift: ${num5}`);

// 8. method indexOf()
// Method untuk mencari index elemen dalam sebuah array
const num6 = [1, 2, 3, 4, 5];
console.log(`8. Contoh method unshift: ${num6.indexOf(3)}`);

// 9. method replace()
// Method untuk mengganti sebuah komponen string dengan komponen baru
const string2 = "nama saya rizky";
console.log(`9. contoh method replace: ${string2.replace("rizky", "siapa?")}`);

// 10. charAt()
// Method yang digunakan untuk menangkap karakter pada string di indeks yang diinginkan
const string3 = "nama saya rizky";
console.log(`10. contoh method charAt: ${string3.charAt(3)}`);