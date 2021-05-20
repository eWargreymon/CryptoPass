import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto: string;
  enviado: boolean;

  textToCipher: string;
  clave: string;
  enviadoCipher: boolean;

  constructor(
    private servicio: ComunicationService
  ) { }

  ngOnInit(): void {
    this.servicio.toAES('ola','ola');
  }

  enviar(){
    this.servicio.data.next(this.texto);
    this.enviado = true;
  }

  enviarCipher(){
    this.servicio.dataCifrado.next(this.textToCipher);
    this.servicio.claveCifrado.next(this.clave);
    this.enviadoCipher = true;
  }

}
