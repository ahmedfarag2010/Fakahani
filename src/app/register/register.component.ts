import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { User } from '../shared/user-interface';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService, private _userService: UserService, private _router:Router) { }

  errorMessage:string = ''

  ngOnInit() {
  }

  register(form){
    console.log(form)
    let data:User = form.value
    this._authService.userRegister(data.email,data.password)
    .then(result => {
      this.errorMessage = ''
      this._userService.generateUser(result.user.uid,data.name,data.phone)
      .then(()=>{
        this._router.navigate(['/'])
      })
    })
    .catch(error => this.errorMessage = error.message)
  }

}
