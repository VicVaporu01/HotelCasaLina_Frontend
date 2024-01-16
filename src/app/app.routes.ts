import {Routes} from '@angular/router';
import {PruebaComponent} from "./components/prueba/prueba.component";
import {HomeComponent} from "./components/home/home.component";
import {ReservationsComponent} from "./components/reservations/reservations.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'prueba', component: PruebaComponent
  },
  {
    path: 'book', component: ReservationsComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: "full"
  }
];
