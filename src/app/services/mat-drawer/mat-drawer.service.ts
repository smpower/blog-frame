import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatDrawerService {

  opened: boolean;
  
  constructor() {
    this.opened = true;
  }

  toggle(): Observable<boolean> {
    return of(this.opened = !this.opened);
  }
  
}
