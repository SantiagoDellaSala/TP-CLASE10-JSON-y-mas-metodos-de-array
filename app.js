const datosBicicletas = require("./datosBici");

const bicicletas = datosBicicletas();

const dhBici = {
  bicicletas: () => {
    return bicicletas;
  },
  buscarBici: (id) => {
    const biciEncontrada = bicicletas.filter((bici) => bici.id === id);
    return biciEncontrada.length > 0 ? biciEncontrada[0] : null;
  },
  venderBici: (id) => {
    const biciEncontrada = dhBici.buscarBici(id);
    if (biciEncontrada) {
      biciEncontrada.vendida = "si";
      return biciEncontrada;
    } else {
      return "Bicicleta no encontrada";
    }
  },
  biciParaLaVenta: () => {
    return bicicletas.filter((bici) => bici.vendida !== "si");
  },
  totalDeVentas: () => {
    return bicicletas.reduce((total, bici) => {
      return bici.vendida === "si" ? total + bici.precio : total;
    }, 0);
  },
  //DESAFIO EXTRA
  aumentoBici: (porcentaje) => {
    return bicicletas.map((bici) => {
      const aumento = bici.precio * (porcentaje / 100);
      const nuevoPrecio = bici.precio + aumento;
      return { ...bici, precio: nuevoPrecio };
    });
  },
  biciPorRodado: (rodado) => {
    return bicicletas.filter((bici) => bici.rodado === rodado);
  },
  listarTodasLasBici: () => {
    bicicletas.forEach((bici) => {
      console.log(`
        Marca: ${bici.marca}
        Modelo: ${bici.modelo}
        Rodado: ${bici.rodado}
        Año de fabricación: ${bici.anio}
        Color: ${bici.color}
        Peso: ${bici.peso} kg
        Tipo: ${bici.tipo}
        Precio: $${bici.precio}
        Vendida: ${bici.vendida}
      `);
    });
  },
};

//Todas las bicicletas
console.log(dhBici.bicicletas());

//Buscar bicicleta por id
console.log(dhBici.buscarBici(1));

//Vender bicicleta por id
console.log(dhBici.venderBici(2));

//Bicicletas para la venta
console.log(dhBici.biciParaLaVenta());

// Total de ventas
console.log("Total de ventas: $" + dhBici.totalDeVentas());

//DESAFIO EXTRA

//Aplicar aumento a todas las bicicletas
console.log("Bicicletas con aumento del 10%: ");
console.log(dhBici.aumentoBici(10));

//Bicicletas por rodado
console.log("Bicicletas con rodado 29: ");
console.log(dhBici.biciPorRodado(29));

//Listar todas las bicicletas
console.log("Todas las bicicletas:");
dhBici.listarTodasLasBici();