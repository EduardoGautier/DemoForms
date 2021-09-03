import { Usuario, UsuarioCadastro } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{UsuariosService}from '../../services/usuarios.service'

@Component({
  selector: 'app-usuarios-detalhe',
  templateUrl: './usuarios-detalhe.component.html',
  styleUrls: ['./usuarios-detalhe.component.css']
})
export class UsuariosDetalheComponent implements OnInit {

  colunas: string[] = ['id', 'email'];
  usuario : Usuario[] = [];


  constructor(private route: ActivatedRoute, private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

  }

}
