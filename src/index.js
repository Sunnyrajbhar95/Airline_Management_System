const express = require("express");
const bodyParser = require("body-parser");
const { City } = require("./models/index");
const CityRepository = require("./routes/index");
const { PORT } = require("./config/envSetup");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1", CityRepository);
  app.listen(PORT, async () => {
    console.log(`server Start at port ${PORT}`);
  });
};
setupAndStartServer();
