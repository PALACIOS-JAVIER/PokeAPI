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
import type { PokeapiResponse } from './bases/PokenApi'; //

export interface PokemonSimplified {
    id: number;
    nombre: string;
    imagen: string;
}

export class PokemonService {
    // Método para obtener un solo Pokémon 
    async getPokemonData(idOrName: string | number): Promise<PokemonSimplified> {
        try {
            const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
            
            // Aplicando destructuring a la respuesta
            const { id, name, sprites } = data as any;// sprites sirve para optimizar rendimiento
            
            return {
                id,
                nombre: name,
                imagen: sprites.front_default 
            };
        } catch (error) {
            console.error("Error al obtener Pokémon:", error);
            throw error;
        }
    }

    // Lógica para obtener el listado inicial
    async getPokemonList(limit: number = 20): Promise<PokemonSimplified[]> {
        const pokemonPromises = [];
        for (let i = 1; i <= limit; i++) {
            pokemonPromises.push(this.getPokemonData(i));
        }
        return Promise.all(pokemonPromises);
    }
}

export const pokemonService = new PokemonService();