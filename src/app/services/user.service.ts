import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _angularFireStore: AngularFirestore) { }

  generateUser(id,name,phone){
    return this._angularFireStore.doc('users/'+id).set({
      name:name,
      phone:phone
    })
  }
}
