import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtykulComponent } from './artykul/artykul.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtykulyService } from './artykuly.service';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { MenuComponent } from './menu/menu.component';
import { ArtykulFormularzComponent } from './artykul-formularz/artykul-formularz.component';
import { ZawartoscKoszykaComponent } from './zawartosc-koszyka/zawartosc-koszyka.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { AutoryzacjaDirective } from './autoryzacja.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArtykulComponent,
    KoszykComponent,
    ArtykulyComponent,
    MenuComponent,
    ArtykulFormularzComponent,
    ZawartoscKoszykaComponent,
    LogowanieComponent,
    AutoryzacjaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
