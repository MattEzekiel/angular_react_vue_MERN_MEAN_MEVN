import { Component } from "@angular/core";
import {HomeComponent} from "../home/home.component";

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    imports: [
        HomeComponent
    ],
    standalone: true
})
export class TestComponent {
  public titulo:string;
  public comentario:string;
  public year:number = 2022;

  constructor() {
    this.titulo = 'Página de prueba';
    this.comentario = 'Comentario';
    this.year = 2023;
    console.log('Componente TestComponent');
  }
}
