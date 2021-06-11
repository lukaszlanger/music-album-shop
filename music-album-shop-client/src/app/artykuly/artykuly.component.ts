import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Artykul } from '../artykul/artykul.component';
import { ArtykulyService, Stronnicowanie } from '../artykuly.service';

@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})
export class ArtykulyComponent implements OnInit {
  stronnicowanie: Stronnicowanie = {
    strona: 1,
    ilosc: 10
  }
  artykuly: Artykul[] = [];
  constructor(private artykulyService: ArtykulyService, private titleApp: Title, private router: Router) {}

  ngOnInit() {
    this.zmianaStronnicowania();
  }

  zmianaStronnicowania() {
    this.artykulyService.pobierzArtykuly(this.stronnicowanie).subscribe(res => this.artykuly = res);
  }

  zmiana(val) {
    console.log(val)
    console.log(this.stronnicowanie)
  }

  dodaj() {
    this.router.navigateByUrl('artykuly/nowy');
  }
}
