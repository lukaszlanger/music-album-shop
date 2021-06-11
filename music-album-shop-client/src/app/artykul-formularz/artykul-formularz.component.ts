import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artykul } from '../artykul/artykul.component';
import { ArtykulyService } from '../artykuly.service';

@Component({
  selector: 'app-artykul-formularz',
  templateUrl: './artykul-formularz.component.html',
  styleUrls: ['./artykul-formularz.component.css']
})
export class ArtykulFormularzComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, private artykulyService: ArtykulyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('idartykulu'));
    if(id > 0) {
      this.id = id;
      this.artykulyService.getArtykul(id).subscribe(res => this.utworzFormularz(res));
    } else {
      this.utworzFormularz(null);
    }
  }

  private utworzFormularz(artykul?: Artykul) {
    this.form = this.fb.group({
      nazwa: new FormControl(artykul?.nazwa, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      opis: new FormControl(artykul?.opis, []),
      cena: new FormControl(artykul?.cena, [Validators.required, Validators.max(200), Validators.min(0)])
    });

    this.form.controls['nazwa'].valueChanges.subscribe(nowaNazwa => {
      console.log('Nowa nazwa: ' + nowaNazwa);
      this.form.controls['opis'].setValue(nowaNazwa);
    });

    this.form.controls['opis'].valueChanges.subscribe(nowyOpis => {
      console.log('Nowy opis: ' + nowyOpis);
    });
  }

  onSubmit() {
    if(this.id > 0) {
      this.artykulyService.edytujArtykul(this.id, this.form.value).subscribe(res => this.router.navigateByUrl('artykuly'));
    } else {
      this.artykulyService.dodajArtykul(this.form.value).subscribe(res => this.router.navigateByUrl('artykuly'));
    }
  }

}
