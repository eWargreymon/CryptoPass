import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-hashes',
  templateUrl: './hashes.component.html',
  styleUrls: ['./hashes.component.css']
})
export class HashesComponent implements OnInit {

  texto: string;
  enviado: boolean;

  constructor(
    private servicio: ComunicationService
  ) { }

  ngOnInit(): void {
  }

  enviar(){
    this.servicio.data.next(this.texto);
    this.enviado = true;
  }

}
