import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatDrawerService {
  
  constructor() { }

  opened: boolean = true;

  toggle(): Observable<boolean> {
    return of(this.opened = !this.opened);
  }
  
}
