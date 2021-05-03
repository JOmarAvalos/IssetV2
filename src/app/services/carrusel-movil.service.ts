import { Injectable } from '@angular/core';
import { ImagenMovil } from '../interfaces/imagenesMovil.modelo';
import ImagenesMovilJson from '../../assets/json/imagenesCarrucelMovil.json';

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
