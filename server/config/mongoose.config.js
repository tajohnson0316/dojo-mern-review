const mongoose = require("mongoose");

const database = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster1331.z3izpy8.mongodb.net/${database}`;

mongoose
  .connect(uri)
  .then(() =>
    console.log(
      `✔✔✔ SUCCESS - Established connection to the ${database} database.`
    )
  )
  .catch((err) =>
    console.log(
      "❌❌❌ CONNECTION FAILED - Something went wrong when trying to connect to the database.",
      err
    )
  );
