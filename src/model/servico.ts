import { Profissional } from "./profissional";

export class Servico{
 
   idServico:number;
   tipoServico:string;
   descricao:string;
   valor:number;
   profissional:Profissional = new Profissional();

}