import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BlogComponent} from "./components/blog/blog.component";
import {FormularioComponent} from "./components/formulario/formulario.component";
import {PeliculasComponent} from "./components/peliculas/peliculas.component";
import {PaginaComponent} from "./components/pagina/pagina.component";
import {Paginapagina404Component} from "./components/paginapagina404/paginapagina404.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent },
    { path: 'pagina-de-pruebas/:nombre', component: PaginaComponent },
    { path: '**', component: Paginapagina404Component }
];

