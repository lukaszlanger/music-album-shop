import { Component, OnInit } from '@angular/core';
import { Artykul } from '../artykul/artykul.component';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements OnInit {
  artykuly: Artykul[] = [];

  constructor(private koszykService: KoszykService) { }

  ngOnInit(): void {
    this.koszykService.pobierzKoszyk().subscribe(res => this.artykuly = res);
  }

  wyczyscKoszyk(): void{
    this.koszykService.wyczyscKoszyk().subscribe();
  }
}
