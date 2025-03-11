import { Routes } from '@angular/router';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppComponent } from './app.component'; // Agregado
import { HomeComponent } from './home/home.component';
import { get } from 'http';
import { GetstartComponent } from './getstarted/getstart.component';
import { LoginComponent } from './login/login.component';
import { PreciosComponent } from './precios/precios.component';
import { NavbarComponent } from './navbar/navbar.component';
import path from 'path';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent }, // Ruta principal
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'servicios', component: ServiciosComponent },
  {path:'getstarted', component: GetstartComponent},
  {path :'login', component: LoginComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // Ruta por defecto
];
