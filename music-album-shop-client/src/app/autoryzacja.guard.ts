import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoryzacjaService } from './autoryzacja.service';

@Injectable({
  providedIn: 'root'
})
export class AutoryzacjaGuard implements CanActivate {
  constructor(private autoryzacjaService: AutoryzacjaService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = this.autoryzacjaService.pobierzZalogowanegoUzytkownika();
    if(user == null) {
      this.router.navigateByUrl('login');
    } else {
      if(route.data?.dozwolonaRola != null) {
        return route.data.dozwolonaRola == user.rola;
      }
    }

    return user != null;
  } 
}