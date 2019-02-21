import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _fireStore: AngularFirestore) { }

  getProducts(){
    return this._fireStore.collection('products').snapshotChanges()
  }
}
