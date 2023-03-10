/* let matriz1 = [3,4,5,6]
let matriz2 = [7,8,9,10]
let nuevaMatriz=[]

let suma_matrices=()=>{

    //if(matriz1.lenght!=matriz2.lenght)return console.log("Las matrices no son del mismo orden")

    for(i=0;i<matriz1.length;i++){

        nuevaMatriz[i]=matriz1[i]+matriz2[i];

    }
    return nuevaMatriz
}

console.log(suma_matrices()) */


// genera una matriz
    // let fila_matriz=parseInt(prompt("Cuatas filas tiene la primera matriz?"));
    // let columna_matriz=parseInt(prompt("Cuatas columnas tiene la primera matriz?"));
    // matriz1=[]
    // for(i=0;i<fila_matriz;i++){
    //     matriz1[i]=new Array(columna_matriz)
    // }

    // for(i=0;i<fila_matriz;i++){
    //     for(j=0;j<columna_matriz;j++){
    //         matriz1[i][j]=parseInt(prompt(`introdusca el valor en [${i},${j}]`))
    //     }
    // }
// genera una segunda matriz
    
let matriz1=[];
let matriz2=[];
let resultadoMatriz=[];
let fila_matriz;
let columna_matriz;

function rellenar(array,numMatriz){

    // pide al usuario las dimensiones de la matriz
    fila_matriz=parseInt(prompt(`Cuatas filas tiene la ${numMatriz} matriz?`));
    columna_matriz=parseInt(prompt(`Cuatas columnas tiene la ${numMatriz} matriz?`));
    
    for(i=0;i<fila_matriz;i++){
        array[i]=new Array(columna_matriz)
    }
    // pide al usuario los valores de su matriz
    for(i=0;i<fila_matriz;i++){
        for(j=0;j<columna_matriz;j++){
            array[i][j]=parseInt(prompt(`introdusca el valor en [${i},${j}]`))
        }
    }

    return alert(array)
}

function validarSuma(){

    // verifican si son de las mismas dimensiones, filas y columnas respectivamente.
    if(matriz1.length!=matriz2.length){
        return alert("las filas son distintas")
    }
    if(matriz1[0].length!=matriz2[0].length){
        return alert("las columnas son distintas")
    }
}

function sumaMatrices(array1,array2,resultado){
    // se utilizan funciones anteriores
    rellenar(array1,"primera")
    rellenar(array2,"segunda")

    validarSuma()

    // genera el array para poder guardar los datos
    for(i=0;i<fila_matriz;i++){

        resultado[i]=new Array(array1[0].length)
        // / pide al usuario los valores de su matriz
        for(j=0;j<columna_matriz;j++){
            resultado[i][j]=array1[i][j]+array2[i][j];
        }

    }

    return alert(resultado)

}

sumaMatrices(matriz1,matriz2,resultadoMatriz)