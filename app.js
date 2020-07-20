const express = require("express");
const app = express();

const PORT = 4000;

app.set("view engine", "ejs") //views

app.use(express.static("public"))

app.use(require("./routes/index"))
app.use(require("./routes/album"))



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})