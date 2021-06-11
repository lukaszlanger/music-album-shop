import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artykul } from './artykul/artykul.component';
import { AutoryzacjaService } from './autoryzacja.service';
import { KoszykComponent } from './koszyk/koszyk.component';

export interface Stronnicowanie {
  strona: number;
  ilosc: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArtykulyService {
    constructor(private http: HttpClient, private autoryzacjaService: AutoryzacjaService) {}

  pobierzArtykuly(stronnicowanie: Stronnicowanie): Observable<Artykul[]> {
    return this.http.get<Artykul[]>('https://localhost:44308/api/Artykuly', {
      params: {
        strona: stronnicowanie.strona.toString(),
        ilosc: stronnicowanie.ilosc.toString()
      }, headers: this.dolaczNaglowki()
    });
  }

  getArtykul(id: number): Observable<Artykul> {
    return this.http.get<Artykul>('https://localhost:44308/api/Artykuly/' + id, { headers: this.dolaczNaglowki() });
  }

  dodajArtykul(artykul: Artykul): Observable<Artykul> {
    return this.http.post<Artykul>('https://localhost:44308/api/Artykuly', artykul, { headers: this.dolaczNaglowki() });
  }

  edytujArtykul(id: number, artykul: Artykul): Observable<Artykul> {
    return this.http.put<Artykul>('https://localhost:44308/api/Artykuly/' + id, artykul, { headers: this.dolaczNaglowki() });
  }

  pobierzKoszyk(): Observable<Artykul[]> {
    return this.http.get<Artykul[]>('https://localhost:44308/api/Koszyk', { headers: this.dolaczNaglowki() });
  }

  dodajdoKosza(artykul: Artykul): Observable<Artykul> {
    return this.http.post<Artykul>('https://localhost:44308/api/Koszyk', artykul, { headers: this.dolaczNaglowki() });
  }

  private dolaczNaglowki(): HttpHeaders {
    return new HttpHeaders().set("Authorization", "Bearer " + this.autoryzacjaService.pobierzZalogowanegoUzytkownika()?.token);
  }
}