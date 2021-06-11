import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtykulFormularzComponent } from './artykul-formularz/artykul-formularz.component';
import { ArtykulComponent } from './artykul/artykul.component';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { AutoryzacjaGuard } from './autoryzacja.guard';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { MenuComponent } from './menu/menu.component';
import { ZawartoscKoszykaComponent } from './zawartosc-koszyka/zawartosc-koszyka.component';

const routes: Routes = [
  { path: '', component: MenuComponent, canActivate: [AutoryzacjaGuard]},
  { path: 'login', component: LogowanieComponent},
  { path: 'artykuly', children: 
    [
      {path: '', component: ArtykulyComponent},
      {path: 'nowy', component: ArtykulFormularzComponent, canActivate: [AutoryzacjaGuard], data: { dozwolonaRola: "Admin" }},
      {path: ':idartykulu', component: ArtykulComponent, canActivate: [AutoryzacjaGuard]},
      {path: ':idartykulu/edycja', component: ArtykulFormularzComponent, canActivate: [AutoryzacjaGuard], data: { dozwolonaRola: "Admin" }}
    ]},
  { path: 'koszyk', component: ZawartoscKoszykaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
