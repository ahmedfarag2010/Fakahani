import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>
  userId:String = ''

  constructor(private _angularFireAuth:AngularFireAuth,private _router:Router) { 
    this.user = _angularFireAuth.user
  }

  userRegister(email,password){
    return this._angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
  }

  userLogin(email,password){
    this._router.navigate(['/'])
    return this._angularFireAuth.auth.signInWithEmailAndPassword(email,password)
    
  }

  userLogout(){
    this._router.navigate(['/'])
    return this._angularFireAuth.auth.signOut()
  }

}
