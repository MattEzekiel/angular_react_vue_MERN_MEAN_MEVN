import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent implements OnInit {
  public nombre:string="";

  constructor(
      private _route:ActivatedRoute,
      private _router:Router,
      )
  {

  }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params['nombre'];
    })
  }

  redirection() {
    this._router.navigate(['/formulario']);
  }
}
