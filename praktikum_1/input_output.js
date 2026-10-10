import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
  console.log("--- Program Identitas Mahasiswa ---");

  const nama = await rl.question("Masukkan Nama Lengkap : ");
  const nim = await rl.question("Masukkan NIM          : ");
  const kelas = await rl.question("Masukkan Kelas        : ");

  console.log("\n---------------------------------");
  console.log(`Halo, ${nama}!`);
  console.log(`NIM Anda   : ${nim}`);
  console.log(`Kelas Anda : ${kelas}`);

  console.log("---------------------------------");
  rl.close();
}

main();
