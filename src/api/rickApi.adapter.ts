import axios from 'axios';
import type { HttpAdapter } from '../bases/interfaces/rickapi-response.interface';

//nota: Usa exactamente el mismo nombre que vas a importar en el main.ts
export class RickApiAdapter implements HttpAdapter {
    async get<t>(url: string): Promise<t> {
        const {data} = await axios.get<t>(url);
        return data;
    }
}