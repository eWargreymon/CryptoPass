import { Injectable } from '@angular/core';
import { MD5,SHA256,SHA512,AES,DES,TripleDES,enc } from "crypto-js";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  data: Subject<string> = new Subject();

  dataCifrado: Subject<string> = new Subject();
  claveCifrado: Subject<string> = new Subject();

  constructor() {}

  toMD5(mensaje: string): string{
    return MD5(mensaje).toString();
  } 
  
  toSHA256(mensaje: string): string{
    return SHA256(mensaje).toString();
  }

  toSHA512(mensaje: string): string{
    return SHA512(mensaje).toString();
  }

  toAES(mensaje: string, clave: string){
    return AES.encrypt(mensaje.trim(), clave.trim()).toString(); 
  }

  fromAES(cifrado: any, clave: string){
    return AES.decrypt(cifrado.trim(), clave.trim()).toString(enc.Utf8);
  }
  
  toDES(mensaje: string, clave: string){
    return DES.encrypt(mensaje.trim(), clave.trim()).toString(); 
  }

  fromDES(cifrado: any, clave: string){
    return DES.decrypt(cifrado.trim(), clave.trim()).toString(enc.Utf8);
  }
  
  toTDES(mensaje: string, clave: string){
    return TripleDES.encrypt(mensaje.trim(), clave.trim()).toString(); 
  }

  fromTDES(cifrado: any, clave: string){
    return TripleDES.decrypt(cifrado.trim(), clave.trim()).toString(enc.Utf8);
  }

}
