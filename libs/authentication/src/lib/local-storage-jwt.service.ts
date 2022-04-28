import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageJwtService {
  getItem(): Observable<string | null> {
    const data = localStorage.getItem('jwt');
    if (data) {
      return of(data);
    }
    return of(null);
  }

  setItem(data: string): Observable<string> {
    localStorage.setItem('jwt', data);
    return of(data);
  }

  removeItem(): Observable<boolean> {
    localStorage.removeItem('jwt');
    return of(true);
  }
}
