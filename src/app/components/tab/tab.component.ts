import { Component, Input } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() screenWidth: number = 0;
  @Input() selectedItem: ShelfItem = {
    cover: '',
author: '',
albumName: '',
case: '',
snap: '',
description: '',
favSong: ''
};
  activeTab: number = 1;

  constructor(private sanitizer: DomSanitizer) {

  }

  updateActiveTab(newIndex: number) {
    this.activeTab = newIndex;
  }

  getUrl(url: string)
      {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

}
