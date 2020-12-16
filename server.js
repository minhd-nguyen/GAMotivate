const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();
require("./config/database");
const port = process.env.PORT || 3001;
const favicon = require('serve-favicon');

const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");

app.use(cors());
app.use(bodyParser.json())
app.use(logger("dev"));

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
