function fomulaGeneral(a, b, c){
    discriminante = ((b ** 2) -(4 *(a*c)));
    raiz =Math.sqrt(discriminante)
    x1= (((-b) + raiz) / (2 * a));
    x2= (((-b) + raiz) / (2 * a));
    return "El valor de x es:" +x1+ "\n El primer valor de x es:" + x1;
}
let a=promp("¿Cual es el valor de a?");