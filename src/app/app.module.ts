import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRouting , routingComponents} from './app.routing';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { environment } from '../environments/environment';
import { AppServiceService } from './shared/app-service.service';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    HomeComponent,
    RegisterComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
