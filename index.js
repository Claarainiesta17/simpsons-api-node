const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { connect } = require("./config/db");

const charactersRoutes = require("./api/routes/characters.routes");

const server = express();
connect();

PORT = 5000;

//HEADERS-CABECERAS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//CORS
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//USO EL LOGGER
server.use(logger("dev"));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/characters", charactersRoutes);

//DEFINO LA SECRETKEY
server.set("secretKey", "supercalifragilisticuespialodoso");

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
