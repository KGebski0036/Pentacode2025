import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: HomeComponent },       // placeholder
  { path: 'profile', component: HomeComponent },     // placeholder
  { path: 'tasks', component: HomeComponent },       // placeholder
  { path: 'scoreboard', component: HomeComponent },  // placeholder
];
