import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {

  mensaje: string;
  clave: string;
  cifrado: string;

  cipherText: string;
  cipherPass: string;
  descifrado: string;

  generado: boolean;
  mostrar: boolean;

  mode: boolean;

  constructor(private comunication: ComunicationService, private clipboardApi: ClipboardService) { 
    this.mode = true; 
  }

  ngOnInit(): void {
    this.comunication.dataCifrado.subscribe(mensaje => {
      this.mensaje = mensaje;
    });

    this.comunication.claveCifrado.subscribe(clave => {
      this.clave = clave;
    });
  }

  cipher(){
    
    if(this.mensaje && this.clave){
      this.cifrado = this.comunication.toDES(this.mensaje, this.clave);
      this.generado = true;
    } else {
      alert('No se ha introducido texto');
    }
  }

  decrypt(){
    this.descifrado = this.comunication.fromDES(this.cipherText, this.cipherPass);
  }
  
  copyText() {
    this.clipboardApi.copyFromContent(this.cifrado);
  }

  reset(){
    this.generado = false;
    this.mostrar = false;
    this.mensaje = '';
    this.clave = '';
  }

}
