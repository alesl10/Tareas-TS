export interface Tarea {
    id: `${string}-${string}-${string}-${string}-${string}`;
    tarea: string;
    fecha: Date;
    completada: boolean;
}