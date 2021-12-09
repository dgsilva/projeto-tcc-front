import { Cliente } from "./cliente"
import { Profissional } from "./profissional";
import { Servico } from "./servico";

export class Agendamento{
    idAgendamento:number;
    data:string;
    hora:string;
    cliente:Cliente = new Cliente();
    profissional:Profissional = new Profissional();
    servico:Servico= new Servico();
}