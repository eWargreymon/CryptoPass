import { Component, Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import { first } from "rxjs/operators";


@Injectable()
export class AuthService {

  public user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  async login(email: string, pass: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        pass
      );
      return result;
    } catch(error){
      console.log(error)
    }
  }

  async register(email: string, pass: string){
    try{

      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        pass
      );
      return result;
    } catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    } catch(err){
      console.log(err);
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

}
