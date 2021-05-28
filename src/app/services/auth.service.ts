import { Component, Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import { AngularFirestore } from '@angular/fire/firestore';
import { userData } from '../models/userData.model';


@Injectable()
export class AuthService {

  public uid: string;

  constructor(
    public afAuth: AngularFireAuth,
    private readonly afs: AngularFirestore
  ) { }

  async login(email: string, pass: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        pass
      );
      
      localStorage.setItem('currentUID', result.user.uid);
      localStorage.setItem('currentEmail', result.user.email);
      
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

  storeData(payload: userData){
    return this.afs.collection('usersData').add(payload);
  }

  loadData(userId: string){
    return this.afs.collection(
      'usersData', 
      ref => ref.where("uID","==",userId)
    ).snapshotChanges();
  }

}
