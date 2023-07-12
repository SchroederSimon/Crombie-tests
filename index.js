/* function sumarDosNumeros(x, y = 3) {
    return x + y
};

console.log(sumarDosNumeros(3))

function areaDelCirculo(radio) {
    return Math.PI * Math.pow(radio, 2)
}
console.log(areaDelCirculo(4))

//hacer funcion que dado el llistado de profesores devuelve el segundo
//y el ultimo
function obtenerSegundoYUltimoProfesor(profesores) {
    const segundoProfesor = profesores[1];
    const ultimoProfesor = profesores[profesores.length - 1];
    return [segundoProfesor, ultimoProfesor];
  }
  
  const listaProfesores = ["Profesor 1", "Profesor 2", "Profesor 3", "Profesor 4"];
  const [segundoProfesor, ultimoProfesor] = obtenerSegundoYUltimoProfesor(listaProfesores);
  
  console.log("Segundo profesor:", segundoProfesor);
  console.log("Último profesor:", ultimoProfesor);

const alumno = {
    nombre: "Juan",
    apellido: "Pérez",
    lenguaje: "JavaScript",
    edad: 20
};

function obtenerCampo(alumno, campo) {
    console.log(alumno.nombre + " - " + alumno[campo]);
}

obtenerCampo(alumno, "edad");
obtenerCampo(alumno, "lenguaje");


const nombreB = "Laura"
const edadB = 25

console.log(`"Laura tiene ${edadB}"`)
*/

/*
Ejercicios clase 3:
Tenemos un array de alumnos, con su nombre y su nota. Encontrar al alumno de menor nota y al de mayor nota. ¿Qué sucede si tenemos dos alumnos con 10?
Ordenar el siguiente array sin usar sort: [3, 23, 11, 15, 6, 19, 32, 9]
Dado el siguiente string, obtener las letras que estén en mayúscula: “LaCrOmbiNeTa”
*/
alumnos = [
    {
        nombre: "Simon",
        nota: 5
    },
    {
        nombre: "Pepe",
        nota: 4
    },
    {
        nombre: "Martin",
        nota: 6
    },
    {
        nombre: "Pedro",
        nota: 10
    },
    {
        nombre: "Juan",
        nota: 10
    }
]

let notaMayor = 0;
let nombreNotaMayor = "";

alumnos.forEach((alumno) => {
    if (alumno.nota > notaMayor) {
        notaMayor = alumno.nota;
        nombreNotaMayor = alumno.nombre;
    }
});

console.log(
    "La nota mayor es de ",
    nombreNotaMayor,
    " con ",
    notaMayor,
    " puntos."
);



//Dado el siguiente string, obtener las letras que estén en mayúscula: “LaCrOmbiNeTa”
str = 'LaCrOmbiNeTa'
//Regex
console.log(str.replace(/[^A-Z]/g, ''))



//Ordenar el siguiente array sin usar sort: [3, 23, 11, 15, 6, 19, 32, 9]
//google
arr = [3, 23, 11, 15, 6, 19, 32, 9];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("Sorted array=>", arr);

