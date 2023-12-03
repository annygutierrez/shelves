import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MusicService {
  selectedIndex = 0;
  indexChanged = new Subject<number>();

  changeSelectedIndex(newIndex: number) {
      this.selectedIndex = newIndex;
    this.indexChanged.next(this.selectedIndex);
  }
}
