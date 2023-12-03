import { Component, Input } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';

@Component({
  selector: 'audio-artifacts',
  templateUrl: './audio-artifacts.component.html',
  styleUrls: ['./audio-artifacts.component.scss']
})
export class AudioArtifactsComponent {
  @Input() selectedItem: ShelfItem = {
    cover: '',
author: '',
albumName: '',
case: '',
snap: ''
}

play (){
}

}
