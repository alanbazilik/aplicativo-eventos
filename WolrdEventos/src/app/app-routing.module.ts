import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'cadrastro-login',
    loadChildren: () => import('./cadrastro-login/cadrastro-login.module').then( m => m.CadrastroLoginPageModule)
  },
  {
    path: 'eventoslist',
    loadChildren: () => import('./eventoslist/eventoslist.module').then( m => m.EventoslistPageModule)
  },
  {
    path: 'cancelarevento',
    loadChildren: () => import('./cancelarevento/cancelarevento.module').then( m => m.CancelareventoPageModule)
  },  {
    path: 'avaliar',
    loadChildren: () => import('./avaliar/avaliar.module').then( m => m.AvaliarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
