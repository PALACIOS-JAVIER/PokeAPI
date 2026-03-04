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
import type{ PokeapiResponse } from './bases/PokenApi.ts';

export interface PokemonCardData {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
}

export class PokemonService {
    async getPokemon(id: number): Promise<PokemonCardData> {
        // Petición modular al endpoint
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        // Aplicando Destructuring (Requisito de buenas prácticas)
        const { name: nombre, id: pokemonId, sprites, abilities } = data;
        const { front_default: imagen } = sprites;
        const descripcion = `Habilidad: ${abilities[0].ability.name}`;

        return { id: pokemonId, nombre, imagen, descripcion };
    }

    async getInitialList(cantidad: number = 20): Promise<PokemonCardData[]> {
        const promesas = Array.from({ length: cantidad }, (_, i) => this.getPokemon(i + 1));
        return Promise.all(promesas);
    }
}

export const pokemonService = new PokemonService();