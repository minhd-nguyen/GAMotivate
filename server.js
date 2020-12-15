const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const port = process.env.PORT || 3001;

require("dotenv").config();
require("./config/database");

const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const threadRouter = require("./routes/threads");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/threads", threadRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
