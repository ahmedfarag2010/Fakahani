import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../shared/app-service.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _service:AppServiceService) { }



  // username:any;
  // password:any

  ngOnInit() {
  }

  // onLogin(){
  //   if(this.username == this._service.allUsers[0].username && this.password == this._service.allUsers[0].password){
  //     alert('true')
  //   } else{
  //     alert('Your username or password is incorrect.')
  //   }
    
  // }

  

}
