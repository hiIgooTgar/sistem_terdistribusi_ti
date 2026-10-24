import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const daftarBarang = [
  { id: 1, nama: "Buku Tulis", harga: 5000 },
  { id: 2, nama: "Pulpen", harga: 3000 },
  { id: 3, nama: "Pensil", harga: 2000 },
  { id: 4, nama: "Penghapus", harga: 1500 },
  { id: 5, nama: "Penggaris", harga: 4000 },
];

function hitungTotalBelanja(idBarang, jumlahBeli) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const barang = daftarBarang.find((item) => item.id === idBarang);

      if (!barang) {
        reject(new Error("ID barang tidak ditemukan!"));
      } else if (!Number.isInteger(jumlahBeli) || jumlahBeli <= 0) {
        reject(new Error("Jumlah beli harus berupa bilangan bulat positif!"));
      } else {
        const totalBayar = barang.harga * jumlahBeli;

        resolve({
          nama: barang.nama,
          jumlah: jumlahBeli,
          hargaSatuan: barang.harga,
          totalBayar: totalBayar,
        });
      }
    }, 1500);
  });
}

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log("==================================");
  console.log("       SISTEM KASIR TOKO");
  console.log("==================================");
  console.log("Daftar Barang:");

  daftarBarang.forEach((barang) => {
    console.log(
      `ID: ${barang.id} | ${barang.nama} | Rp${barang.harga.toLocaleString("id-ID")}`,
    );
  });

  try {
    const inputId = await rl.question("\nMasukkan ID Barang: ");
    const inputJumlah = await rl.question("Masukkan Jumlah Beli: ");

    const idBarang = Number(inputId);
    const jumlahBeli = Number(inputJumlah);

    console.log("\nMemproses transaksi...");

    const hasil = await hitungTotalBelanja(idBarang, jumlahBeli);

    console.log("\n========== STRUK PEMBAYARAN ==========");
    console.log(`Nama Barang  : ${hasil.nama}`);
    console.log(`Jumlah Beli  : ${hasil.jumlah}`);
    console.log(
      `Harga Satuan : Rp${hasil.hargaSatuan.toLocaleString("id-ID")}`,
    );
    console.log("--------------------------------------");
    console.log(`Total Bayar  : Rp${hasil.totalBayar.toLocaleString("id-ID")}`);
    console.log("======================================");
    console.log("Terima kasih telah berbelanja!");
  } catch (error) {
    console.error(`\nTransaksi gagal: ${error.message}`);
  } finally {
    rl.close();
    console.log("Program kasir selesai.");
  }
}

main();
