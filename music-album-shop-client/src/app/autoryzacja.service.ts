import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Login {
  login: string;
  haslo: string;
}

export interface LoginRes {
  token: string;
  rola: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutoryzacjaService {

  zmianaStanuUzytkownika: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  pobierzZalogowanegoUzytkownika(): LoginRes {
    let loginres = JSON.parse(sessionStorage.getItem('uzytkownik')) as LoginRes;
    if(loginres != null && this.czyTokenJestPrzestarzaly(loginres.token)) {
      loginres = null;
      this.wyloguj();
    }
    return loginres;
  }

  private czyTokenJestPrzestarzaly(token: string): boolean {
    token.split('.').forEach(c => {
      try {
        console.log(atob(c));
      } catch {
        console.log('Oryginał: ', c);
      }
    });

    let dataWaznosci = (JSON.parse(atob(token.split('.')[1]))).exp;
    let obecnyCzas = (Math.floor((new Date).getTime() / 1000));

    return obecnyCzas >= dataWaznosci;
  }

  login(login: Login): Observable<boolean> {
    return this.http.post<LoginRes>("https://localhost:44308/api/Login", login).pipe(map(res => {
      sessionStorage.setItem('uzytkownik', JSON.stringify(res));
      this.zmianaStanuUzytkownika.emit();
      return true;
    }), catchError(error => {
      return of(false);
    }));
  }

  wyloguj() {
    sessionStorage.removeItem('uzytkownik');
    this.zmianaStanuUzytkownika.emit();
  }
}