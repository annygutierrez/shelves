import { Component, Input, HostListener, OnInit } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';

@Component({
  selector: 'audio-artifacts',
  templateUrl: './audio-artifacts.component.html',
  styleUrls: ['./audio-artifacts.component.scss']
})
export class AudioArtifactsComponent implements OnInit {
  @Input() selectedItem: ShelfItem = {
    cover: '',
author: '',
albumName: '',
case: '',
snap: '',
description: '',
favSong: ''
}
screenWidth: number = window.innerWidth;

ngOnInit() {
  this.screenWidth = window.innerWidth;
}

play (){
}

@HostListener('window:resize', ['$event'])
      onResize() {
        const width = window.innerWidth;
        this.screenWidth = width;
        // if (this.screenWidth < 1161) {
        //   this.shelveItemNumber = 18;
        // }
        // if (this.screenWidth < 844) {
        //   this.shelveItemNumber = 12;
        // }
        // if (this.screenWidth < 560) {
        //   this.shelveItemNumber = 8;
        // }
        // if (this.screenWidth < 375) {
        //   this.shelveItemNumber = 5;
        // }
        // this.parseItemList(this.shelveItemNumber);
      }

}
