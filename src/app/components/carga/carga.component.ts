import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargarImagenesService } from '../../services/cargar-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;

  archivos: FileItem[] = [];

  constructor(
    private _cargarImagenes : CargarImagenesService
  ) { }

  ngOnInit(): void {
  }

  cargarImagenes(){
    this._cargarImagenes.cargarImagenesFirebase( this.archivos );
  }

  prueba( event ){
    console.log( event );
  }

  limpiarArchivos(){
    this.archivos = [];
  }


}
