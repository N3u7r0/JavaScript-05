console.log(document.body);
console.log("JavaScript-05. BrianSabatini - CoderHouse");

class Productobuzo {
    constructor(tipo, marca, color, talle, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
}
class Productocampera {
    constructor(tipo, marca, color, talle, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
}
//items.
const itemBuzo = [];
itemBuzo.push(new Productobuzo("Buzo", "Rush", "negro", "S", "2000"));
itemBuzo.push(new Productobuzo("Buzo", "Adidas", "rojo", "Xl", "3800"));
itemBuzo.push(new Productobuzo("Buzo", "Nike", "azul", "L", "5100"));
itemBuzo.push(new Productobuzo("Buzo", "Rip Curl", "gris", "M", "12000"));
itemBuzo.push(new Productobuzo("Buzo", "Rusty", "negro", "L", "7400"));
itemBuzo.push(new Productobuzo("Buzo", "Fila", "gris y negro", "M", "24500"));

const itemCampera = [];
itemCampera.push(new Productocampera("Campera", "Volcom", "violeta", "S", "3700"));
itemCampera.push(new Productocampera("Campera", "Nike", "negro", "S", "6200"));
itemCampera.push(new Productocampera("Campera", "Dc shoes", "verde", "XXl", "6900"));
itemCampera.push(new Productocampera("Campera", "Rip Curl", "azul", "M", "15000"));
itemCampera.push(new Productocampera("Campera", "volcom", "violeta", "XL", "3700"));
itemCampera.push(new Productocampera("Campera", "N3 Beats Studio", "negro", "M", "999999"));


//front dinamica.
let userName = prompt("Bienvenido! ingrese su Nombre");
console.log(userName + " ingreso a la app");
let selecUsuario = prompt("Hola " + userName + ". ¿Que producto vas a ingresar, buzo o campera?.");
if (selecUsuario === "buzo") {
    let idLogo = document.getElementById("titulo__logo");// h1 con id en index.html
    idLogo.innerHTML = "Buzo ingresado";//texto de h1 reemplazado por js
    let tipoNew = "Buzo";
    let marcaNew = prompt("ingrese la marca:");
    let colorNew = prompt("ingrese el color:");
    let talleNew = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
    let precioNew = prompt("ingrese el precio -sin el signo $-:");
    itemBuzo.push(new Productobuzo(tipoNew,marcaNew, colorNew, talleNew, precioNew));
    console.log(userName + "ingreso un nuevo item");
    console.log(itemBuzo);
    
}
else if (selecUsuario === "campera") {
    let idLogo = document.getElementById("titulo__logo")
    idLogo.innerHTML = "Campera ingresada"
    let tipoNew = "Campera";
    let marcaNew = prompt("ingrese la marca:");
    let colorNew = prompt("ingrese el color:");
    let talleNew = prompt("ingrese el talle: -XS-S-M-L-X-XL-XXL-:");
    let precioNew = prompt("ingrese el precio -sin el signo $-:");
    itemCampera.push(new Productocampera(tipoNew,marcaNew, colorNew, talleNew, precioNew));
    console.log(userName + "ingreso un nuevo item");
    console.log(itemCampera);
}
//Sorteo.
alert("Operacion realizada con exito.");
alert(userName + "!!! Gracias por ser parte de nuestro equipo!. Vamos a realizar un sorteo sorpresa el 21/04 para todos los colaboradores, y queremos que tengas tu numero!.");
for (let i = 1; i < 99; i++) {
    alert("!!!" + userName + " tu numero de sorteo es el numero " + i + "!!!")
    console.log(userName + " recibio el numero " + i);
    break;
}

console.log("stock total final");
console.log(itemBuzo.concat(itemCampera))
