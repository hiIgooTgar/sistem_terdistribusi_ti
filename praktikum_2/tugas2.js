function autentikasiUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "secret123") {
        resolve({
          status: 200,
          pesan: "Login Berhasil!",
        });
      } else {
        reject(new Error("Kredensial salah. Akses ditolak!"));
      }
    }, 2000);
  });
}

async function main() {
  console.log("=== SISTEM AUTENTIKASI USER ===");
  console.log("Memverifikasi kredensial...");

  try {
    const hasil = await autentikasiUser("admin", "secret123");

    console.log(`Status: ${hasil.status}`);
    console.log(hasil.pesan);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Proses autentikasi selesai.");
  }
}

main();
