import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuestDetail } from './pages/quest-detail/quest-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'quest/:id', component: QuestDetail },
];