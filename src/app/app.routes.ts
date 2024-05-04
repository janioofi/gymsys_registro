import { Routes } from '@angular/router';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';

export const routes: Routes = [
  {path: 'entrada', component: EntradaComponent},
  {path: 'saida', component: SaidaComponent},
];
