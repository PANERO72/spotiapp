import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

const AppRoutes: Routes = [{ path: 'home', component: HomeComponent, data: { titulo: 'Inicio' }},{ path: 'search', component: SearchComponent, data: { titulo: 'Buscar'}},{path: 'artista/:id', component: ArtistaComponent, data: { titulo: 'Artista'}},{ path: '', pathMatch: 'full', redirectTo: 'home' },{ path: '**', pathMatch: 'full', redirectTo: 'home' }];

export const APP_ROUTES = RouterModule.forRoot(AppRoutes, {useHash: true});