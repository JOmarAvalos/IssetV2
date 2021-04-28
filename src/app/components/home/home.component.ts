import { Component, OnInit } from '@angular/core';
import { CarruselWebService } from '../../services/carrusel-web.service';
import { ImagenWeb } from '../../interfaces/imagenesWeb.modelo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  imagenesWeb: ImagenWeb[] = [];
  imagenesWebv2: any[any] = [];

  constructor( private carruselWebService: CarruselWebService ) {}

  ngOnInit() {
    this.imagenesWeb = this.carruselWebService.getImagenesWeb();
  }

}
