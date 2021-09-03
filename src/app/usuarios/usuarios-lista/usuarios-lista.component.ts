import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import {ConsultaPaginada, Usuario} from '../../models/consultapaginada.model';
import { Router } from '@angular/router';
import{UsuariosService}from '../../services/usuarios.service'


@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  colunas: string[] = ['id', 'email'];
  usuarios: Usuario[] = [];

  constructor(private UsuariosService: UsuariosService,private router: Router) {

  }

  ngOnInit(): void {

    this.UsuariosService.BuscarTodos().subscribe(
      dados => {
        console.log(dados);
        this.usuarios = dados.data;
      },
      erro =>{
        console.log(erro);
        alert('Erro ao buscar usuarios');
        this.usuarios = [];
      }
    );

  }


  selecionaUsuario(usuario: Usuario) {
    alert(`Cliclou ${usuario.email}`);
    this.router.navigate([`usuarios/detalhar/${usuario.id}`]);

  }






}
