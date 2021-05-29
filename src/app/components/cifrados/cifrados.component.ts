import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-cifrados',
  templateUrl: './cifrados.component.html',
  styleUrls: ['./cifrados.component.css']
})
export class CifradosComponent implements OnInit {

  textToCipher: string;
  clave: string;
  enviadoCipher: boolean;

  modocifrado: number = 2;
  mostrar: boolean;

  constructor(
    private servicio: ComunicationService
  ) { }

  ngOnInit(): void { 
  }

  cambiarModo(){

  }

  enviarCipher(){
    this.servicio.dataCifrado.next(this.textToCipher);
    this.servicio.claveCifrado.next(this.clave);
    this.enviadoCipher = true;
  }

}
