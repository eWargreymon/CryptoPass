import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-sha256',
  templateUrl: './sha256.component.html',
  styleUrls: ['./sha256.component.css']
})
export class Sha256Component implements OnInit {

  mensaje: string;
  hashed: string;

  generado: boolean;
  mostrar: boolean;

  constructor(
    private comunication: ComunicationService,
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
    this.comunication.data.subscribe(mensaje => {
      this.mensaje = mensaje;
      this.hashed = this.comunication.toSHA256(this.mensaje);
    });
  }

  generate(){
    if(this.mensaje){
      this.hashed = this.comunication.toSHA256(this.mensaje);
      this.generado = true;
    } else {
      alert('No se ha introducido texto');
    }
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.hashed);
  }

  reset(){
    this.generado = false;
    this.mostrar = false;
    this.mensaje = '';
  }

}
