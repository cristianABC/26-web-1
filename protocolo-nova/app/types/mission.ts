export interface Tripulante {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    company: { title: string };
    email: string;
}

export interface LogRegistro {
    id: string;
    oxigeno: number;
    comentarios: string;
    timestamp: string;
}