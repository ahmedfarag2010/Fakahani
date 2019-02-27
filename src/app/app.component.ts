import { Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Fakahani';

  constructor(private _authService: AuthService){
    
  }

  isLogged:boolean = false


  ngOnInit(){
    console.log(this.isLogged)
    this._authService.user.subscribe(user => {
      if(user){
        this.isLogged = true
        this._authService.userId = user.uid
      } else{
        this.isLogged = false
        this._authService.userId = ''
      }
    })
  }

  logout(){
    console.log('logout')
    this._authService.userLogout()
    this.isLogged = false
  }


  
}
