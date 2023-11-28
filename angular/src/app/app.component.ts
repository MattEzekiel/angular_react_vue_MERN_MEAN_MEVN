import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from "./components/test/test.component";
import {PeliculasComponent} from "./components/peliculas/peliculas.component";
import {SeriesComponent} from "./components/series/series.component";
import {HeaderComponent} from "./components/header/header.component";
import {SliderComponent} from "./components/slider/slider.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent, PeliculasComponent, SeriesComponent, HeaderComponent, SliderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Matt';
  public mostrarPeliculas:boolean;

  constructor() {
    this.mostrarPeliculas = true;
  }

  ocultarPeliculas() {
    this.mostrarPeliculas = !this.mostrarPeliculas
  }
}
