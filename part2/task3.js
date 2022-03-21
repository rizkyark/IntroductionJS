const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  const sortedArrayData = [];

  if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal!.";
  } else if (dataArray.length <= 5) {
    return "Jumlah data dalam array harus lebih dari 5!";
  } else {
    for (i = 0; i <= dataArray.length; i++) {
      if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
        sortedArrayData.push(dataArray[i]);
      }
    }

    if (sortedArrayData.length < 0) {
      return "Jumlah angka dalam arrayData tidak ada!";
    }

    return sortedArrayData.sort((a, b) => a - b);
  }
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 2, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17, [2, 25, 4]));
