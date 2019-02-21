import { Injectable } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { HttpClient } from '@angular/common/http';
import { Product } from './product-interface'
import { User } from './user-interface'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  islogged:boolean = true;

  //users: AngularFireList<any[]>;
  //allUsers:any;

  //username;
  //password;

  private _products = '/assets/data/product.json'
  private _user = '/assets/data/user.json'
  

  constructor(private _http : HttpClient) {
  //constructor(private _db : AngularFireDatabase,private _http : HttpClient) {  

    // this.users = this._db.list('/users')
    
    // this.users.valueChanges().subscribe(users => {
    //   this.allUsers = users;
    //   //console.log(this.allUsers)
    // })

    //this.username = this._db.list('/users/username')
    //this.password = this._db.list('/users/password')
   }

   getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>(this._products)
   }

   getUsers(): Observable<User[]>{
     return this._http.get<User[]>(this._user)
   }

}
