import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCfUdvFCWkNb1-OPNnMVcorPEIMtzpjacM",
      authDomain: "angularlist-17122.firebaseapp.com",
      databaseURL: "https://angularlist-17122.firebaseio.com",
      projectId: "angularlist-17122",
      storageBucket: "angularlist-17122.appspot.com",
      messagingSenderId: "294939075663",
      appId: "1:294939075663:web:e7f0ffb81ca1edc829b63a"
    }),
    AngularFireAuthModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule {}
