import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artykul } from './artykul/artykul.component';
import { ArtykulyService } from './artykuly.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {

  constructor(private http:HttpClient) {
    this.http.get<Artykul[]>('https://localhost:44308/api/Koszyk',{}).subscribe(res => {this.wybraneArtykuly.next(res)});
  }


  private wybraneArtykuly: BehaviorSubject<Artykul[]> = new BehaviorSubject<Artykul[]>([]);

  pobierzKoszyk(): Observable<Artykul[]> {
    return this.wybraneArtykuly.asObservable();
  }

  wyczyscKoszyk(): Observable<void> {
    return this.http.put<Artykul[]>('https://localhost:44308/api/Koszyk',{}).pipe(map(res=>{this.wybraneArtykuly.next(res); return}));
  }
  
  dodajDoKoszyka(id: number): Observable<void> {
    return this.http.post<Artykul[]>('https://localhost:44308/api/Koszyk/' + id, {}).pipe(map(res => {this.wybraneArtykuly.next(res); return}))
  }
}