import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';
import { USERS_API_URL } from '../utils/rest';
import{ UsuarioCadastro} from '../models/usuario.model'
import {ConsultaPaginada} from '../models/consultapaginada.model';
import { UsuarioDetalhado } from '../models/usuariodetalhado.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private api: RestapiService) { }

  public BuscarTodos(){
    return this.api.get<ConsultaPaginada>(USERS_API_URL);
  }

  public cadastrar(usuario: UsuarioCadastro) {
    return this.api.post<UsuarioCadastro>(USERS_API_URL, usuario);
  }
  
  public buscarPorId(id:number){
    return this.api.get<UsuarioDetalhado>(USERS_API_URL+ '/' +id);
  }
}
