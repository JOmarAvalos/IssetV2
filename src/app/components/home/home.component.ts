import { Component, OnInit } from '@angular/core';
// Services
import { CarruselWebService } from '../../services/carrusel-web.service';
import { CarruselMovilService } from '../../services/carrusel-movil.service';
import { PromocionesService } from '../../services/promociones.service';
// Interfaces
import { ImagenWeb } from '../../interfaces/imagenesWeb.modelo';
import { ImagenMovil } from '../../interfaces/imagenesMovil.modelo';
import { ImagenPromocion } from '../../interfaces/imagenesPromocion.modelo';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  imagenesWeb: ImagenWeb[] = [];
  imagenesMovil: ImagenMovil[] = [];
  imagenesPromocion: ImagenPromocion[] = [];

  constructor( private carruselWebService: CarruselWebService,
               private carruselMovilService: CarruselMovilService,
               private promocionesService: PromocionesService ) {}

  ngOnInit() {
    this.imagenesWeb = this.carruselWebService.getImagenesWeb();
    this.imagenesMovil = this.carruselMovilService.getImagenesMovil();
    this.imagenesPromocion = this.promocionesService.getImagenesPromocion();
  }

}
