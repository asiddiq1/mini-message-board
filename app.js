const express = require("express");
const path = require("node:path");
const app = express();

const newMessageRouter = require("./routes/newMessageRouter")
const indexRouter = require("./routes/indexRouter")
const viewMessageRouter = require("./routes/viewMessageRouter")


app.use(express.urlencoded({ extended: true })); //middleware allows to parse urlencoded data in POST

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/", newMessageRouter);
app.use("/", viewMessageRouter);



const PORT = process.env.PORT || 3000; //hardcoded port - use env variable w/ fallback value
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`)); 