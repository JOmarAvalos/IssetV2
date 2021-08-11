import { Injectable } from '@angular/core';
import { ImagenWeb } from '../interfaces/imagenesWeb.modelo';
import ImagenesWebJson from '../../assets/json/imagenesCarruselWeb.json';

@Injectable({
  providedIn: 'root'
})

export class CarruselWebService {

  private imagenesWeb: ImagenWeb[] =  ImagenesWebJson;

  constructor( ) {}

  getImagenesWeb(): ImagenWeb[] {
    return this.imagenesWeb;
  }

}
