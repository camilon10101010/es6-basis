//trae dependencias del
//componente sumar 
import {sumar, restar} from './sumar.js'
import estudiantes from './materias.js'
import materias from './materias.js'

//1. Recorrido de arreglo: foreach 
 
materias.forEach ((materia)=> {
    if(materia.profesor === 'Cristian Buitrago'){
    console.log( `Materias: ${materia.name}`)
    console.log( `Notas: ${materia.notas}`)
    }
})
//2. convertir a un arreglo de profesores
let profesores = materias.map(function(materia){
    return materia.profesor
})
//3. agregar una materia 
materias.push(
    {
        id:4,
        name: "Cultura Fisica",
        profesor: "Luis Baquero",
        notas: [
            2,
            3.5
        ]
    })

//console.log(materias)

//4. Busqueda en arreglo
//find 
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})
 console.log(PHP)