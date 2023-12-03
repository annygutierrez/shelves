import { Component, Input, HostListener, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';
import { ShelfLevel } from './shelf-levels.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MusicService } from '../../services/music.service';
import { Subscription } from 'rxjs';
import { ScreenSizes, ItemsPerLevel } from './shelf-levels.enum';

@Component({
    selector: 'shelf-levels',
    templateUrl: './shelf-levels.component.html',
    styleUrls: ['./shelf-levels.component.scss']
  })
export class ShelfLevelsComponent implements OnInit {
     @Input() itemList: ShelfItem[] = [];
     @Input() shelvesType: string = '';
     screenWidth: number = 0;
     shelveItemNumber: number = 26
     parsedList: ShelfLevel[] = [];
     selectedIndex: number = 0;

     musicServiceSub?: Subscription;

     constructor(private sanitizer: DomSanitizer, private musicService: MusicService) {}

     ngOnInit() {
       this.parseItemList(0);
       this.musicServiceSub = this.musicService.indexChanged.subscribe(
        (newVal) => {
          this.selectedIndex = newVal;
        }
      );
     }

     changeSelectedIndex(newIndex: number) {
      
           
      this.musicService.changeSelectedIndex(newIndex);
    }

     

    // ngOnChanges(changes: SimpleChanges) {
    //   changes.screenWidth.currentValue
    // }

    parseItemList(width: number) {
      // if (width <= ScreenSizes.tablet) {
        
      // }
      let sum = this.itemList.reduce((accumulator: ShelfLevel[], currentValue: ShelfItem, index) => {
        console.log('index', index);
        if (accumulator.length && accumulator[accumulator.length - 1].items.length < this.shelveItemNumber) {
          if (accumulator[accumulator.length - 1]) accumulator[accumulator.length - 1]['items'].push(currentValue);
          // if (!accumulator[index]) accumulator[index] =  { items: [currentValue] };
          return accumulator;
        }
        if (!accumulator.length || accumulator[accumulator.length - 1].items.length === this.shelveItemNumber) {
          accumulator.push({ items: [currentValue] });
          return accumulator;
        }
        return accumulator;
        
        // if (accumulator.indexOf(currentValue) === -1) {
        //   accumulator.push(currentValue);
        // }
        
      }, []);
      this.parsedList = sum;
      console.log('sum', sum);
    }

    getUrl(url: string)
      {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

    @HostListener('window:resize', ['$event'])
      onResize() {
        const width = window.innerWidth;
        // if (screenWidth < 950) {
        //   this.screenWidth = screenWidth;
        // }
        this.parseItemList(width);
      }

      ngOnDestroy(): void {
        if (this.musicServiceSub) {
          this.musicServiceSub.unsubscribe();
        }
      }
}