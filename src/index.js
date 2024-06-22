const express = require("express");
const bodyParser = require("body-parser");

const { PORT }=require("./config/envSetup")


const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  

  app.post("/h", (req, res) => {
    console.log(req.body);
  });
  app.listen(PORT, () => {
    console.log(PORT);
    console.log(`server Start at port ${PORT}`);
  });
};
setupAndStartServer();
