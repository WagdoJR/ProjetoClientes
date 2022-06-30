import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    console.log("antes");

    this.clienteService.getClientes().subscribe((clientes:Cliente[]) => {
      console.log("Cliente",Cliente);
      this.clientes = clientes;
    });


    console.log("depois");
  }

  confirmaRemocao(cliente: Cliente){
    let mensagem = "Deseja realmente remover o cliente: "+cliente.primeiroNome+" "+cliente.sobreNome + ", Matricula: "+cliente.id+"?";
    if(confirm("mensagem")){
    this.clienteService.remover(cliente.id).subscribe((cliente)=>{
      let clienteIdx = this.clientes.findIndex( (value) => value.id == cliente.id);
      this.clientes.splice(clienteIdx, 1);
        alert("Cliente removido com sucesso!");

      }, erro => {
        alert("Erro ao excluir cliente. Mensagem: "+erro?.error?.message);
      });
    }
  }

}
