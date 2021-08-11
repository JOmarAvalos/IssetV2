import { Injectable } from '@angular/core';
import { ImagenMovil } from '../interfaces/imagenesMovil.modelo';
import ImagenesMovilJson from '../../assets/json/imagenesCarruselMovil.json';

@Injectable({
  providedIn: 'root'
})

export class CarruselMovilService {

  private imagenesMovil: ImagenMovil[] =  ImagenesMovilJson;

  constructor( ) {}

  getImagenesMovil(): ImagenMovil[] {
    return this.imagenesMovil;
  }

}
