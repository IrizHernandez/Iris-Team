console.log("ejercicio 2");

function ejercicio2(segundos){
    horas=(segundos/3600);
    minutos=(segundos % 3600) / 60;
    rsegun =(segundos % 60);
    return horas.toString + ":"+minutos.toString + ":"+rsegun;
}