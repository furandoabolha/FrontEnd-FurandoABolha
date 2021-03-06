import { Tema } from "./Tema"
import { Usuario } from "./Usuario"


export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public curtidas: number
    public descurtidas: number
    public data: Date
    public usuario: Usuario
    public tema: Tema
}