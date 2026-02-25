// export const usuario:{nombre:string, edad:number, activo:boolean} = {
//     nombre: "javier",
//     edad: 19,
//     activo: true
// };

// interface Usuario {
//     nombre: string;
//     edad: number;
//     telefono?: string;
//     activo: boolean;
// }
// export const usuario:Usuario={
//     nombre:"diego",
//     edad: 24,
//     activo: true
// }

type Usuario = {
    nombre: string;
    edad: number;
    telefono?: string;
    activo: boolean;
}
const usuario:Usuario={
    nombre:"diego",
    edad: 24,
    activo: true
}
const Javier:Usuario={
    nombre:"javier",
    edad: 20,
    activo: true
}
export const user:Usuario[]=[];

user.push(usuario,Javier);
console.log(user);

//Forma 1: Usando tipo[]
let numeros:number[]=[1,2,3,4,5];
let nombres:string[]=["javier","armando","palacios"]

//Forma 2: Usando Array<tipo>
let numeros2:Array<number>=[10,20,30,40,50];
let nombres2:Array<string>=["javier","armando","palacios"]

//Arreglos de múltiples tipos (union)
//Puedes permitir que el arreglo contenga diferentes tipos con uniones (|).
const mezcla:(number|string)[]=[1,"hola",2,"mundo"]

//Arreglos de objetos
//Si cada elemento es un objeto, puedes usar interfaces o tipos.
interface UsuarioS{
    nombre:string;
    edad:number;
}
let perro: UsuarioS[] =[
    {nombre:"javier",edad:10},
    {nombre:"armando",edad:20},
];
console.log(perro);
console.log(mezcla);
console.log(numeros);
console.log(nombres);
console.log(numeros2);
console.log(nombres2);