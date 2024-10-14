//MODULOS


const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}
const sumar = (x1,x2)=> x1+x2
const restar = (x1,x2)=> x1-x2
const dividir = (x1,x2)=>{
   return x2==0 ? mostrarErrorDivision() : x1/x2 
}
const mostrarErrorDivision = () => console.log('No se puede dividir por cero');
const PI=3.14;

// export default
module.exports = sayHi
module.exports= sumar
module.exports = restar
module.exports = dividir
//module.exports = PI

console.log(module);
