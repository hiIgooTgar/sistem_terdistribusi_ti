import http from "http";
function callServer(path, method = "GET") {
  return new Promise((resolve) => {
    const options = { hostname: "localhost", port: 3000, path, method };
    console.log(`\n=> [method]http: //localhost: 3000{path}`);
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        console.log(
          ` [Status Code]: ${res.statusCode} ${res.statusMessage || ""}`,
        );
        if (res.headers.location) {
          console.log(` [Redirect To]: ${res.headers.location}`);
        }
        try {
          console.log(` [Data]:`, JSON.parse(data));
        } catch {
          console.log(` [Data]:`, data);
        }
        resolve();
      });
    });
    // Menangkap event respon sementara 1xx
    req.on("information", (info) => {
      console.log(
        ` [1xx Interim]: Status ${info.statusCode} ${info.statusMessage}`,
      );
    });
    req.on("error", (err) => {
      console.error(` [Error]: ${err.message}`);
      resolve();
    });
    req.end();
  });
}
async function run() {
  console.log("Memulai pengetesan seluruh simulasi status code (1xx - 5xx)...");
  await callServer("/");
  await callServer("/status/102"); // 1xx INFORMATIONAL
  await callServer("/status/200"); // 2xx SUCCESS
  await callServer("/status/201", "POST"); // 2xx SUCCESS (Created)
  await callServer("/status/301"); // 3xx REDIRECTION
  await callServer("/status/400"); // 4xx CLIENT ERROR
  await callServer("/status/404"); // 4xx CLIENT ERROR
  await callServer("/status/500"); // 5xx SERVER ERROR
  console.log("\nPengetesan selesai!");
}
run();
