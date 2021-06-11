import { Component, Input, Output, OnInit } from '@angular/core';
import { KoszykService } from '../koszyk.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtykulyService } from '../artykuly.service';

export interface Artykul {
  id: number,
  nazwa: string,
  opis: string,
  cena: number
}

@Component({
  selector: 'app-artykul',
  templateUrl: './artykul.component.html',
  styleUrls: ['./artykul.component.css']
})
export class ArtykulComponent implements OnInit {
  @Input('wartosc') artykul: Artykul;
  wybranyBool: boolean = false;
  id: number;

  constructor(private artykulyService: ArtykulyService, private koszykService: KoszykService, private route: ActivatedRoute, private router: Router) { }
  
  dodajDoKoszyka(id: number) {
    this.koszykService.dodajDoKoszyka(id).subscribe();
  }
  
  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('idartykulu'));
    if(id > 0) {
      this.id = id;
      this.artykulyService.getArtykul(id).subscribe(res => this.artykul = res);
    }
  }

  przejdz(id: number) {
    this.router.navigateByUrl('artykuly/' + id);
  }
}