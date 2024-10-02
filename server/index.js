const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  return res.send("HELLO WORLD");
});

app.use("", require("./routes/movies"));
app.use("/auth", require("./routes/auth"));

app.listen(8080, () => {
  console.log("Now listening on PORT 8080");
});
