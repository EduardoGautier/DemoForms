import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ UsuariosService }from '../../services/usuarios.service'
import { UsuarioData } from 'src/app/models/usuariodetalhado.model';



@Component({
  selector: 'app-usuarios-detalhe',
  templateUrl: './usuarios-detalhe.component.html',
  styleUrls: ['./usuarios-detalhe.component.css']
})
export class UsuariosDetalheComponent implements OnInit {

  colunas: string[] = ['firstName', 'lastName'];
  usuario: UsuarioData | undefined;
  id : any;

  constructor(private route: ActivatedRoute, private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.UsuariosService.buscarPorId(this.id).subscribe(
      dados => {
        this.usuario = dados.data;
        console.log(this.usuario.first_name)
      },
      erro =>{
        console.log(erro);
        this.usuario;
      }
    );
  }

}
