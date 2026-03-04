import type { HttpAdapter, RickapiResponse } from "./interfaces/rickapi-response.interface";
type CharacterData ={
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
        public  edad: number,
        private http: HttpAdapter
    ) {}
    get imageUrl():string {
        return `https://imagenUser.com${this.id}`;
    }
    saludar():string {
        return `hola, soy ${this.nombre} con el id: ${this.id}`;
    }
    async getCharacter(characterId:number): Promise<CharacterData>{
        //realizamos la solicitud y destructuramos 'data'
        const {data} = await this.http.get<RickapiResponse>
        (`https://rickandmortyapi.com/api/character/77${characterId}`);
        const {image, name, status, id} = data;
        return {image, name, status, id};
        
        }   
}   
