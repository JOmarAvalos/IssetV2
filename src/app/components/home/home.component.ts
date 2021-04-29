import { Component, OnInit } from '@angular/core';
import { CarruselWebService } from '../../services/carrusel-web.service';
import { CarruselMovilService } from '../../services/carrusel-movil.service';
import { ImagenWeb } from '../../interfaces/imagenesWeb.modelo';
import { ImagenMovil } from '../../interfaces/imagenesMovil.modelo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  imagenesWeb: ImagenWeb[] = [];
  imagenesMovil: ImagenMovil[] = [];

  constructor( private carruselWebService: CarruselWebService,
               private carruselMovilService: CarruselMovilService ) {}

  ngOnInit() {
    this.imagenesWeb = this.carruselWebService.getImagenesWeb();
    this.imagenesMovil = this.carruselMovilService.getImagenesMovil();
  }

}
