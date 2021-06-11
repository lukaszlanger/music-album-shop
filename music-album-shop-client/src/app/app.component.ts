import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Artykul } from './artykul/artykul.component';
import { ArtykulyService, Stronnicowanie } from './artykuly.service';
import { AutoryzacjaService } from './autoryzacja.service';
import { KoszykService } from './koszyk.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'lab05';

  constructor(private autoryzacjaService: AutoryzacjaService, private router: Router) {}
  
  getTitle(): string {
    return this.title;
  }

  czyZalogowany(): boolean {
    return this.autoryzacjaService.pobierzZalogowanegoUzytkownika() != null;
  }

  wyloguj() {
    this.autoryzacjaService.wyloguj();
    this.router.navigateByUrl("login");
  }
}
