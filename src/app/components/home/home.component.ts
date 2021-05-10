import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto: string;
  hash: string;
  panelOpenState = false;

  constructor(
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
  }

  copyText(type:number) {
    console.log(this.texto);
    
    if(type===0){
      this.clipboardApi.copyFromContent(this.texto);
    } else {
      console.log('este sería sha');
    }
  }

}
