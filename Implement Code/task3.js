const fazzfood = (harga, voucher, jarak, pajak) => {
  let diskon;
  let ongkir;
  let ongkirAwal = 5000;

  if (voucher === "FAZZFOOD50") {
    diskon = fazzfood50(harga);
  } else if (voucher === "DITRAKTIR60") {
    diskon = ditraktir60(harga);
  } else {
    diskon = 0 
  }

  if (jarak <= 2) {
    ongkirAwal;
  } else {
    ongkir = ongkirAwal + 3000 * (jarak - 2);
  }

  if (pajak === true) {
    pajak = harga * 0.05;
  } else {
    pajak = 0;
  }

  return `\nHarga : ${harga} \nDiskon: ${diskon} \nongkir: ${ongkir} \npajak : ${pajak} \n\nSubtotal: ${
    harga - diskon + ongkir + pajak
  }`;
};

function fazzfood50(harga) {
  const diskonMax = 50000;

  if (harga >= 50000) {
    diskon = 0.5 * harga;
    if (diskon > diskonMax) {
      diskon = diskonMax;
    }
  } else {
    diskon = 0;
  }
  return diskon;
}

function ditraktir60(harga) {
  const diskonMax = 30000;

  if (harga >= 25000) {
    diskon = 0.6 * harga;
    if (diskon > diskonMax) {
      diskon = diskonMax;
    }
  } else {
    diskon = 0;
  }
  return diskon;
}

console.log(fazzfood(75000, "FAZZFOOD50", 5, true));
