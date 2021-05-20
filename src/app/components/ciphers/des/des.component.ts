import { Component, OnInit } from '@angular/core';
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

  constructor(private comunication: ComunicationService) { }

  ngOnInit(): void {
    this.comunication.dataCifrado.subscribe(mensaje => {
      this.mensaje = mensaje;
    });

    this.comunication.claveCifrado.subscribe(clave => {
      this.clave = clave;
    });
  }

  cipher(){
    this.cifrado = this.comunication.toDES(this.mensaje, this.clave);
  }

  decrypt(){
    this.descifrado = this.comunication.fromDES(this.cipherText, this.cipherPass);
  }

}
