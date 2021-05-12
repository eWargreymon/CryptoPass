import { Injectable } from '@angular/core';
import { MD5,SHA256,SHA512 } from "crypto-js";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  data: Subject<string> = new Subject();

  constructor() { }

  toMD5(mensaje: string): string{
    return MD5(mensaje).toString();
  } 
  
  toSHA256(mensaje: string): string{
    return SHA256(mensaje).toString();
  }

  toSHA512(mensaje: string): string{
    return SHA512(mensaje).toString();
  }
}
