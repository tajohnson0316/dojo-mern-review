const express = require("express");
const app = express();

// load .env vars
require("dotenv").config();
// access .env vars
const PORT = process.env.PORT;

const cors = require("cors");

// DB connectivity
require("./config/mongoose.config");

// middleware
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// Required for routing
// require("./routes/author.routes")(app);

app.listen(PORT, () => console.log(`❕❕❕ Now listening on port: ${PORT}.`));
