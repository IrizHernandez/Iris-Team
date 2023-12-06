console.log("Ejercicio 3");

function ejercicio3([L1, L2, L3]){
    s=[L1, L2, L3]/2
    area=Math.sqrt(s*(s-L1)*(s-L2)*(s-L3))
    return area.toFixed(2);
}