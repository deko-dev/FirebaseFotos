import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';  

export interface Imagen { 
  nombre: string,
  url: string
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {

  private imagesCollection: AngularFirestoreCollection<Imagen>;
  images: Observable<Imagen[]>;


  constructor(
    private angularFS: AngularFirestore
  ) { 
    this.imagesCollection = angularFS.collection<Imagen>('img');
    this.images = this.imagesCollection.valueChanges(); 
  }

  ngOnInit(): void {
  }

}
