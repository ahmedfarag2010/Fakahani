import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthService, private _router:Router) { }

  

  ngOnInit() {
   
  }

  login(form){
    let data = form.value
    this._authService.userLogin(data.email,data.password)
    //this._router.navigate(['/'])
    .then(result => {
      console.log(result)
    })
    .catch(err=> console.log('err',err))
  }

  

  

}
