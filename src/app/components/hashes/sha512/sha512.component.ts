import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-sha512',
  templateUrl: './sha512.component.html',
  styleUrls: ['./sha512.component.css']
})
export class Sha512Component implements OnInit {

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
    });
  }

  generate(){
    this.hashed = this.comunication.toSHA512(this.mensaje);
    this.generado = true;
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.hashed);
  }

  reset(){
    this.generado = false;
    this.mostrar = false;
  }
}
