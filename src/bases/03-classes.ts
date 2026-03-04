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

// export class Usuario {
//     // nombre:string;
//     // edad:number;
//     // telefono?:string;

//     //metodos
//     constructor(public readonly nombre:string, public readonly edad:number, public readonly telefono?:string) {} 
//     saludar():string {
//         return `hola, soy ${this.nombre}`;
//     }
//  }
//     //crear un objeto tipo usuario
//     export const userClass = new Usuario("javier", 36, "123456789");
 

import axios from 'axios';
type CharacterData ={
    image:string;
    name:string;
    status:string;
    id:number;
}
type RickapiResponse ={
    image:string;
    name:string;
    status:string;
    id:number;
}
export class Usuario {
    //metodos
    constructor(
        public id: number,
        public nombre: string, 
        public  edad: number
    ) {} 

    get imageUrl():string {
        return `https://imagenUser.com${this.id}`;
    }
    saludar():string {
        return `hola, soy ${this.nombre} con el id: ${this.id}`;
    }
    async getMoves(): Promise<CharacterData>{
        try{
        //realizamos la solicitud y destructuramos 'data'

        const {data: datosRick} = await axios.get<RickapiResponse>('https://rickandmortyapi.com/api/character/77')

        //desestructuramos las propiedades que nos interesan, como valores por defecto
        const  {image='', name = 'desconocido', status='N/A', id }= datosRick;
        console.log(image);

        //retornamos solo los datos que nos interesan o relevantes
        return {image, name, status, id};
    }catch(error){
        console.error("error al obtener datos:",error)
        throw error;

        // console.log(data.image);
        // return data;
        // // console.log(resp);
    }
 }
}
    //crear un objeto tipo usuario
    export const userClass = new Usuario(1, "javier", 36);
    console.log(userClass.getMoves());     
    userClass.getMoves();
