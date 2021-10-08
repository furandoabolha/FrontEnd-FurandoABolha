import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public palavraChave: string
    public descricao: string
    public postagem: Postagem[]
    public tema: string
}