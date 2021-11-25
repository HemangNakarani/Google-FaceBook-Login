const https = require("https");
const fs = require("fs");

const httpsOptions = {
  key: fs.readFileSync("./localhost.key"),
  cert: fs.readFileSync("./localhost.crt"),
};

https
  .createServer(httpsOptions, (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("index.html").pipe(res);
  })
  .listen(5500, () => {
    console.log("Started on 5500");
  });
