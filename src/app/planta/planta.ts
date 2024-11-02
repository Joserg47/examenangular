export class Planta {
    id: number;
    nombrecomun: string;
    nombrecientifico: string;
    tipo: string;
    alturamaxima: number;
    clima: string;
    sustratosiembra: string;

    public constructor(id: number, nombrecomun: string, nombrecientifico: string, tipo: string, alturamaxima: number,clima: string, sustratosiembra:string) {
        this.id = id;
        this.nombrecomun = nombrecomun;
        this.nombrecientifico = nombrecientifico;
        this.tipo = tipo;
        this.alturamaxima = alturamaxima;
        this.clima = clima;
        this.sustratosiembra = sustratosiembra;
    }
}
