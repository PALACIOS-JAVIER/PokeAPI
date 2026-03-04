export interface RickapiResponse {
    id:        number;
    nombre:    string;
    estado:    string;
    especie:   string;
    tipo:      string;
    género:    string;
    origen:    Origen;
    ubicación: Origen;
    imagen:    string;
    episodio:  string[];
    url:       string;
    creado:    Date;
}

export interface Origen {
    nombre: string;
    url:    string;
}

export interface HttpAdapter {
    get<T>(url:string):Promise<T>;
}