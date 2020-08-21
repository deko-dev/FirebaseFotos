import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FileItem } from '../models/file-item';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';


interface Imagen {
  nombre: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class CargarImagenesService {

  private CARPETA_IMAGENES = 'img'

  constructor(
    private firestore: AngularFirestore,
    private storage : AngularFireStorage
  ) { }


  private guardarImagen( imagen : Imagen){

    this.firestore.collection( `/${ this.CARPETA_IMAGENES }` )
        .add( imagen );

  }

  cargarImagenesFirebase( imagenes : FileItem[] ){



    for( const item of imagenes ){

      item.estaSubiendo = true;
      if( item.progreso >= 100 ){
        continue; 
      }
      const storageRef = this.storage.ref( `${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`)

      const uploadTask = storageRef.put( item.archivo );


      uploadTask.snapshotChanges()
                .subscribe( 
                  snapshot => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
                  error => console.log( "Error al subir imagen", error ),
                  ()=> {
                    console.log("Imagen cargada correctamente");
                    storageRef.getDownloadURL()
                              .subscribe(response => {
                                item.url = response
                                this.guardarImagen( {
                                  nombre: item.nombreArchivo,
                                  url: item.url
                                })
                              });
                  }
                )
                

    }


  }
}
