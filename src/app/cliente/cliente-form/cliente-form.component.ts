import { ClienteService } from './../shared/cliente.service';
import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
    this.clienteService.getById(parseInt(id)).subscribe((cliente) => {

      if(cliente){
        this.cliente = cliente;
      }
    }, erro => {
      alert("Erro ao buscar cliente com id:"+id);
    });
    }
  }

  public salvar(cliente: Cliente){
    let acao="criado";
    if(cliente.id){
      acao = "alertado";
    }
    this.clienteService.salvar(cliente).subscribe((cliente) => {
      alert("Cliente "+acao+" com sucesso, ID:"+cliente.id);
      this.router.navigate(['cliente'])
    }, erro => {
      alert(erro?.error?.message);
      console.log(erro);
    })
  }

}
