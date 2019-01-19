import { Injectable } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  islogged:boolean = false;

  users: AngularFireList<any[]>;
  allUsers:any;

  username;
  password;

  constructor(private _db : AngularFireDatabase) {

    this.users = this._db.list('/users')
    
    this.users.valueChanges().subscribe(users => {
      this.allUsers = users;
      //console.log(this.allUsers)
    })

    //this.username = this._db.list('/users/username')
    //this.password = this._db.list('/users/password')
   }
}
