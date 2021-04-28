import { Injectable } from '@angular/core';
import { ImagenWeb } from '../interfaces/imagenesWeb.modelo';



@Injectable({
  providedIn: 'root'
})
export class CarruselWebService {

  private imagenesWeb: ImagenWeb[] =  [
    {
      id: 1,
      nombre: 'promoWeb1',
      img: 'assets/img/carruselWeb/promoWeb1.jpg'
    },
    {
      id: 2,
      nombre: 'promoWeb2',
      img: 'assets/img/carruselWeb/promoWeb2.jpg'
    },
    {
      id: 3,
      nombre: 'promoWeb3',
      img: 'assets/img/carruselWeb/promoWeb3.jpg'
    }
  ];

  constructor( ) {}

  getImagenesWeb(): ImagenWeb[] {
    return this.imagenesWeb;
  }

}
