import {UsuarioCadastro } from './../../models/usuario.model';
import { Usuario } from 'src/app/models/consultapaginada.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ UsuariosService }from '../../services/usuarios.service'
import { UsuariosListaComponent } from './../usuarios-lista/usuarios-lista.component';



@Component({
  selector: 'app-usuarios-detalhe',
  templateUrl: './usuarios-detalhe.component.html',
  styleUrls: ['./usuarios-detalhe.component.css']
})
export class UsuariosDetalheComponent implements OnInit {

  colunas: string[] = ['id', 'email'];
  usuario : Usuario[] = [];
  id : any;

  constructor(private route: ActivatedRoute, private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.UsuariosService.buscarPorId(this.id).subscribe(
      dados => {
        this.usuario = dados.data;
        console.log(this.usuario);

      }
    );
  }

}
