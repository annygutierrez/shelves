import { Component, Input } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';

@Component({
    selector: 'base-shelve',
    templateUrl: './base-shelve.component.html',
    styleUrls: ['./base-shelve.component.scss'],
  })
  export class BaseShelveComponent {
    shelvesType: string = 'music';
    shelvesLevels: ShelfItem[]= [
        {
            cover: 'born-to-die.png',
            author: 'Lana Del Rey',
            albumName: 'Born To Die',
            case: 'born-to-die.png',
            snap: "https://open.spotify.com/embed/album/5VoeRuTrGhTbKelUfwymwu?utm_source=generator"
        },
        {
          cover: 'united-we-are.png',
          author: 'Lana Del Rey',
          albumName: 'Born To Die',
          case: 'united-we-are.png',
          snap: "https://open.spotify.com/embed/album/3QTVsIyjtbHhXGxwh7H6j3?utm_source=generator"
      },
      {
        cover: 'nothing-but-the-beat.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'nothing-but-the-beat.png',
        snap: "https://open.spotify.com/embed/album/4bTjdxhRRUiWfwj200f9Kl?utm_source=generator"
      },
      {
        cover: '18-months.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: '18-months.png',
        snap: "https://open.spotify.com/embed/album/7w19PFbxAjwZ7UVNp9z0uT?utm_source=generator"
      },
      {
        cover: 'anti.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'anti.png',
        snap: "https://open.spotify.com/embed/album/4UlGauD7ROb3YbVOFMgW5u?utm_source=generator" 
      },
      {
        cover: 'nonante-cinq.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'nonante-cinq.png',
        snap: "https://open.spotify.com/embed/album/2hQ9QcZ4VkoeBdBo1JNG64?utm_source=generator" 
      },
      {
        cover: 'seven.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'seven.png',
        snap:"https://open.spotify.com/embed/album/0f1CZexom6ELxbDZx32fyk?utm_source=generator" 
      },
      {
        cover: 'beauty-behind-the-madness.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'beauty-behind-the-madness.png',
        snap: "https://open.spotify.com/embed/album/0P3oVJBFOv3TDXlYRhGL7s?utm_source=generator"
      },
      {
        cover: 'sweet-sexy-savage.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'sweet-sexy-savage.png',
        snap: "https://open.spotify.com/embed/album/4B4in9QlrlYWSHlYSRebdC?utm_source=generator"
      },
      {
        cover: 'badlands.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'badlands.png',
        snap: "https://open.spotify.com/embed/album/5OZJflQcQCdZLQjtUudCin?utm_source=generator"
      },
      {
        cover: 'brol.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'brol.png',
        snap:"https://open.spotify.com/embed/album/6KSvWFf4g4PrIldtchJsTC?utm_source=generator" 
      },
      {
        cover: 'more-than-you-know.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'more-than-you-know.png',
        snap: "https://open.spotify.com/embed/album/6Ei5WWek37m1x9AjpSXTcJ?utm_source=generator" 
      },
      {
        cover: 'melodrama.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'melodrama.png',
        snap:"https://open.spotify.com/embed/album/2B87zXm9bOWvAJdkJBTpzF?utm_source=generator" 
      },
      {
        cover: 'youth-punk.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'youth-punk.png',
        snap: "https://open.spotify.com/embed/album/5oHFyKzFBV1OEsk7y0ktI3?utm_source=generator" 
      },
      {
        cover: 'gold-skies.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'gold-skies.png',
        snap:"https://open.spotify.com/embed/album/4EV2HGPHQpUu4cPxJTP0OT?utm_source=generator" 
      },
      {
        cover: 'euphoria.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'euphoria.png',
        snap: "https://open.spotify.com/embed/album/788r22Bhr3IHLTNPy8pZea?utm_source=generator"
      },
      {
        cover: 'laundry-service.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'laundry-service.png',
        snap: "https://open.spotify.com/embed/album/4DyMK9x2gnmRkRa16zHaEV?utm_source=generator"
      },
      {
        cover: 'cassette.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'cassette.png',
        snap:"https://open.spotify.com/embed/album/0Wn5sHYtC7vPPX0n2AVJmF?utm_source=generator" 
      },
      {
        cover: 'uitzinning.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'uitzinning.png',
        snap:"https://open.spotify.com/embed/album/1uAimajt3zW6EGLIE83jnc?utm_source=generator" 
      },
      {
        cover: 'paycheck.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'paycheck.png',
        snap:"https://open.spotify.com/embed/album/4c8PkfUv6QLHkFPEqH0yDw?utm_source=generator" 
      },
      {
        cover: 'etadgy.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'etadgy.png',
        snap: "https://open.spotify.com/embed/album/1FHREwXgTQvqiG8q5KlRzc?utm_source=generator" 
      },
      {
        cover: '7-27.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: '7-27.png',
        snap: "https://open.spotify.com/embed/album/0pF0oyuPNdOObniB1Ng0kW?utm_source=generator" 
      },
      {
        cover: 'skryvaj.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'skryvaj.png',
        snap: "https://open.spotify.com/embed/album/4v7LVUKXfXJwsomhfHaefk?utm_source=generator" 
      },
      {
        cover: 'nieve.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'nieve.png',
        snap:"https://open.spotify.com/embed/album/7N2JnHvKmtzGxOPjr1DcOX?utm_source=generator" 
      },
      {
        cover: 'reflection.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'reflection.png',
        snap: "https://open.spotify.com/embed/album/0zAsh6hObeNmFgFPrUiFcP?utm_source=generator" 
      },
      {
        cover: 'ultraviolence.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'ultraviolence.png',
        snap: "https://open.spotify.com/embed/album/1ORxRsK3MrSLvh7VQTF01F?utm_source=generator" 
      }
      
    ]
  }