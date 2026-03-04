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
import type { PokeapiResponse } from './bases/PokenApi.ts';

// Definimos qué datos queremos extraer de pokenApi
export type PokemonData = {
    nombre: string;
    experiencia: number;
    habilidadPrincipal: string;
}

export class Usuario {
    constructor(
        public id: number,
        public nombre: string, 
        public edad: number
    ) {} 
    async getPokemonInfo(): Promise<PokemonData> {
        try {
            // Usamos la URL de la imagen: pokeapi
            const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/ditto`);

            // Extraemos la información relevante del JSON de la imagen
            return {
                nombre: data.name,
                experiencia: data.base_experience,
                habilidadPrincipal: data.abilities[0].ability.name
            };
        } catch (error) {
            console.error("Error al obtener datos de Pokémon:", error);
            throw error;
        }
    }
}

export const userClass = new Usuario(1, "javier", 36);