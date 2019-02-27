import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRouting , routingComponents} from './app.routing';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule , FirestoreSettingsToken } from '@angular/fire/firestore'
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppServiceService } from './shared/app-service.service';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MyOrdersComponent } from './my-orders/my-orders.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    HomeComponent,
    RegisterComponent,
    ProductListComponent,
    MyOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireDatabaseModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AppServiceService,
    {provide:FirestoreSettingsToken,useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
