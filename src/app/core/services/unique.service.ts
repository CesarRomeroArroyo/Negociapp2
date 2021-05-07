import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueService {

  constructor() { }

  uniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r
        : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public distance(lon1: number, lat1: number, lon2: number, lat2: number): string {
    const rad = (x) => x * Math.PI / 180
    const R = 6378.137;
    const dLat = rad(lat2 - lat1);
    const dLong = rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d.toFixed(3);
  }
}
