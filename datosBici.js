const fs = require("fs");

const obtenerDatosBicicletas = () => {
  const data = fs.readFileSync("./bicicletas.json", "utf8");
  const bicicletas = JSON.parse(data);
  return bicicletas;
};

module.exports = obtenerDatosBicicletas;