import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo:string;

  constructor() {
    this.titulo = "Películas"
    console.log('PeliculasComponent');
  }

  ngOnInit() {
    console.log('evento onInit PeliculasComponent');
  }

  ngDoCheck() {
    console.log('ngDoCheck PeliculasComponent');
  }

  cambiarTitulo() {
    this.titulo = "Cambiando el componente Películas";
  }

  ngOnDestroy() {
    console.log('ngOnDestroy PeliculasComponent');
  }
}
