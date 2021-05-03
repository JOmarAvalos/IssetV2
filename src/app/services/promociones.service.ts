import { Injectable } from '@angular/core';
import { ImagenPromocion } from '../interfaces/imagenesPromocion.modelo';
import ImagenesPromocionJson from '../../assets/json/imagenesPromociones.json';

@Injectable({
  providedIn: 'root'
})

export class PromocionesService {

  private imagenPromociones: ImagenPromocion[] =  ImagenesPromocionJson;

  constructor() { }

  getImagenesPromocion(): ImagenPromocion[] {
    return this.imagenPromociones;
  }

}
