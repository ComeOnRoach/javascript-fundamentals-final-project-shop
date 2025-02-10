const http = require("http");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

const uploadDir = path.join(__dirname, "img");

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/upload") {
    const form = new formidable.IncomingForm();
    form.uploadDir = uploadDir;
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Помилка завантаження" }));
        return;
      }

      const oldPath = files.image[0].filepath;
      const newPath = path.join(
        uploadDir,
        "products",
        files.image[0].originalFilename
      );

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Не вдалося зберегти файл" }));
          return;
        }

        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
        console.log(oldPath);
        console.log(newPath);
        res.end(
          JSON.stringify({
            imageUrl: `api/img/products/${files.image[0].originalFilename}`,
          })
        );
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
