console.log("Ejercicio 1");

function ejercicio1(radio, altura){
    volumen=3.1416*(radio**2)*altura;
    area=2*3.1416*radio*altura;
    return [area.toFixed(2), volumen.toFixed(2)];
}