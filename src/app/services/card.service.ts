import { Injectable } from '@angular/core';
import { Product } from '../shared/product-interface'
import { AngularFirestore } from '@angular/fire/firestore'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _angularFirestore:AngularFirestore,private _authService:AuthService) { }

  addToCard(data:Product){
    return this._angularFirestore.collection(`users/${this._authService.userId}/card`)
    .add(data)
  }

  getOrders(){
    return this._angularFirestore.collection(`users/${this._authService.userId}/card`).snapshotChanges()
  }

  delete(id){
    return this._angularFirestore.doc(`users/${this._authService.userId}/card/${id}`).delete()
  }

  save(id,quantity){
    return this._angularFirestore.doc(`users/${this._authService.userId}/card/${id}`).update({
      quantity
    })
  }
}
