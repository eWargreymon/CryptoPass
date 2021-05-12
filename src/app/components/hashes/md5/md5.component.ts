import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-md5',
  templateUrl: './md5.component.html',
  styleUrls: ['./md5.component.css']
})
export class Md5Component implements OnInit {

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
      this.hashed = this.comunication.toMD5(this.mensaje);
    });
  }

  generate(){
    if(this.mensaje){
      this.hashed = this.comunication.toMD5(this.mensaje);
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
