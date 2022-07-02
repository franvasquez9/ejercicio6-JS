const listaDeCompra = ["Sal", "Arroz","Harina","Carne","Pollo"];
console.log(listaDeCompra);

listaDeCompra.push("Aceite de girasol");
console.log(listaDeCompra);

listaDeCompra.pop();
console.log(listaDeCompra);


const listaPeliculas = [
    {titulo: "Harry Potter y el pricionero de ascaban", director: "Juanito Perez", fecha: "2007-03-15"},
    {titulo: "Tiburon", director: "Pedro Sanchez", fecha: "1990-04-10"},
    {titulo: "stars ward", director: "Lucia Mendoza", fecha: "2015-06-01"},
]
const nuevaLista = listaPeliculas.filter(obj => obj.fecha > "2010-01-01");
console.log(nuevaLista);

const listaDirectores = listaPeliculas.map((obj) => obj.director)
console.log(listaDirectores);

const listaTitulos = listaPeliculas.map((obj) => obj.titulo)
console.log(listaTitulos);

console.log(listaDirectores.concat(listaTitulos));

const listaPropagacion = listaDirectores.concat(listaTitulos)
console.log(...listaPropagacion);