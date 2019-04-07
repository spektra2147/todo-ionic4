import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'crit', pathMatch: 'full' },
  { path: 'crit', loadChildren: './crit/crit.module#CritPageModule' },
  { path: 'later', loadChildren: './later/later.module#LaterPageModule' },
  { path: 'done', loadChildren: './done/done.module#DonePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
