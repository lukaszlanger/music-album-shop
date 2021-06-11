import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artykul } from '../artykul/artykul.component';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-zawartosc-koszyka',
  templateUrl: './zawartosc-koszyka.component.html',
  styleUrls: ['./zawartosc-koszyka.component.css']
})
export class ZawartoscKoszykaComponent implements OnInit {
  @Input('wartosc') artykul: Artykul;
  artykuly: Artykul[] = [];
  constructor(private koszykService: KoszykService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.koszykService.pobierzKoszyk().subscribe(res => this.artykuly = res);
  }

}
