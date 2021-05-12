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
