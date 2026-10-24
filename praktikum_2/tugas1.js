const konversiSuhu = (nilaiSuhu, tipeKonversi) => {
  if (tipeKonversi === "C_to_F") {
    return (nilaiSuhu * 9) / 5 + 32;
  } else if (tipeKonversi === "F_to_C") {
    return ((nilaiSuhu - 32) * 5) / 9;
  } else {
    return "Tipe konversi tidak valid!";
  }
};

const hasil1 = konversiSuhu(30, "C_to_F");
const hasil2 = konversiSuhu(86, "F_to_C");

console.log("=== PROGRAM KONVERSI SUHU ===");
console.log(`30°C = ${hasil1}°F`);
console.log(`86°F = ${hasil2}°C`);
