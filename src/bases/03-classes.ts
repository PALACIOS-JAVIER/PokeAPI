// export class Usuario {
//     //propiedades
//     nombre:string;
//     edad:number;

//     //metodos
//     constructor(nombre:string, edad:number) {
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     saludar():void{
//         console.log(`hola, soy ${this.nombre}`)
//     }
// }
//  //crear un objeto tipo usuario
//  export const userClass = new Usuario("javier", 40);
//  userClass.saludar();

export class Usuario {
    constructor(public readonly nombre:string, public readonly edad:number, public readonly telefono?:string) {} 
    saludar():string {
        return `hola, soy ${this.nombre}`;
    }
 }
    //crear un objeto tipo usuario
    export const userClass = new Usuario("javier", 36, "123456789");
    
