export interface UsuarioDetalhado {
    data:    UsuarioData;
    support: Support;
}

export interface UsuarioData {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}