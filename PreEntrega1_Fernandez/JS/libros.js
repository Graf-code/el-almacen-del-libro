function library() {
  let totally = 0;
  let options;
  do {
    options = prompt("TU ALMACEN DEL LIBRO \n \n MENU PRINCIPAL \n \n 1- COMPRAR LIBRO \n 2- PAGAR LIBRO  \n 3- SALIR");
    options = parseInt(options);
    switch (options) {
      case 1:
        totally = totally + buyBook();
        break;
      case 2:
        alert("EL VALOR DEL LIBRO QUE USTED ADQUIRIO ES: " + totally);
        totally = 0;
        break;
      case 3:
        alert("SESION CERRADA. GRACIAS POR SU VISITA, LO ESPERAMOS PRONTO.");
        break;
      default:
        alert("opcion invalida");
    }
  } while (options != 3);
}

function buyBook() {
  let stacker = 0;
  // alert("BIENVENIDO AL ALMACEN DEL LIBRO, DONDE ENCONTRARA LO QUE USTED DESEE LEER.");
  // alert("1 - GUERRA Y PAZ (LEON TOLSTOI 1) \n 2 - GUERRA Y PAZ (LEON TOLSOTI 2) \n 3 - LA ODISEA \n 4 - LA ILIADA \n 5 - FRANZ KAFKA (METAMORFOSIS)");
  let book = prompt("BIENVENIDO AL ALMACEN DEL LIBRO, DONDE ENCONTRARA ESE LIBRO QUE TANTO DESEA. \n \n DE LA LISTA, ELIJA EL QUE MAS LE GUSTE Y ASI LE PROPORCIONAREMOS EL VALOR. \n \n1 - GUERRA Y PAZ (LEON TOLSTOI 1) \n2 - GUERRA Y PAZ (LEON TOLSTOI 2) \n3 - LA ODISEA \n4 - LA ILIADA \n5 - FRANZ KAFKA (METAMORFOSIS)");
  book = parseInt(book);

  switch (book) {
    case 1:
      stacker = 2930;
      break;
    case 2:
      stacker = 2930;
      break;
    case 3:
      stacker = 1500;
      break;
    case 4:
      stacker = 1500;
      break
    case 5 :
      stacker = 875;
      break;
    default:
      alert("LA BIBLIOTECA NO CUENTA CON LO SOLICITADO ");
  }
  return stacker;
}
library();
