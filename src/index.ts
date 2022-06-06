/*Cantidad y Distribución de Positivos
• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total

Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0
3 positivos, 75% del total*/

let nro = (prompt ("Ingrese números positivos y/o negativos"))
let positivos: number = 0;
let total: number= 0;
let porcentajePositivos: number = 0;

while ( nro !== 0){
 if ( nro > 0 ){
positivos++;
}
total++;
nro = (prompt ("Ingrese números positivos y/o negativos"));
}if (total>0){  
  porcentajePositivos= positivos * 100 / total;

  console.log("La cantidad de numeros positivos es "+ positivos+
   " y el porcentaje de números positivos es " + porcentajePositivos);
}