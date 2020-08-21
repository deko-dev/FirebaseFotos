import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { AppRoutingModule } from './app.routes';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';



// Firebase
import { AngularFireModule } from '@angular/fire';
import { FIREBASE } from 'src/environments/firebase-config';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp( FIREBASE.firebase ),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
