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
        cover: 'laundry-service.png',
        author: 'Shakira',
        albumName: 'Born To Die',
        case: 'laundry-service.png',
        favSong: "https://open.spotify.com/embed/track/15f8Cv8RXUlOOCIf2oaceN?utm_source=generator",
        description: "This is my favorite music by Shakira. Great lyrics, creative lines, amazing mix of sounds and genres, her voice is great singing rock music. Love this.",
        snap: "https://open.spotify.com/embed/album/4DyMK9x2gnmRkRa16zHaEV?utm_source=generator"
      },
      {
        cover: 'nothing-but-the-beat.png',
        author: 'David Guetta',
        albumName: 'Born To Die',
        case: 'nothing-but-the-beat.png',
        favSong: "https://open.spotify.com/embed/track/14GjTzurOPyaxusQvJxokJ?utm_source=generator",
        description: "This album was the soundtrack of my middle school life", 
        snap: "https://open.spotify.com/embed/album/4bTjdxhRRUiWfwj200f9Kl?utm_source=generator"
      },
      {
        cover: '18-months.png',
        author: 'Calvin Harris',
        albumName: 'Born To Die',
        case: '18-months.png',
        favSong: "https://open.spotify.com/embed/track/1KtD0xaLAikgIt5tPbteZQ?utm_source=generator",
        description: "This was the first album that made my brain tingle, it also reminds me of my overly sensitive teenage self.",
        snap: "https://open.spotify.com/embed/album/7w19PFbxAjwZ7UVNp9z0uT?utm_source=generator"
      },
      {
        cover: 'united-we-are.png',
        author: 'Hardwell',
        albumName: 'Born To Die',
        case: 'united-we-are.png',
        favSong: "https://open.spotify.com/embed/track/7FmRgt4VBaWDDM8jiP3dAA?utm_source=generator",
        description: "This album was my moral booster when I was like 16, definitely the best music by Hardwell.",
        snap: "https://open.spotify.com/embed/album/3QTVsIyjtbHhXGxwh7H6j3?utm_source=generator"
    },
        {
            cover: 'born-to-die.png',
            author: 'Lana Del Rey',
            albumName: 'Born To Die',
            case: 'born-to-die.png',
            description: "This album deserved a Grammy. This was a reset in pop culture, so many were influenced by this work. A magnificent album, which was also my companion in important moments.",
            favSong: "https://open.spotify.com/embed/track/7yFMhCJOsH7khgpdnyrZAZ?utm_source=generator",
            snap: "https://open.spotify.com/embed/album/5VoeRuTrGhTbKelUfwymwu?utm_source=generator"
        },
        {
          cover: 'gold-skies.png',
          author: 'Martin Garrix',
          albumName: 'Born To Die',
          case: 'gold-skies.png',
          favSong: "https://open.spotify.com/embed/track/5vQIaNoKsT4xkG1j2KFBFs?utm_source=generator",
          description: "This album was the soundtrack of my High School years.",
          snap:"https://open.spotify.com/embed/album/4EV2HGPHQpUu4cPxJTP0OT?utm_source=generator" 
        },
        {
          cover: 'seven.png',
          author: 'Martin Garrix',
          albumName: 'Born To Die',
          case: 'seven.png',
          favSong: "https://open.spotify.com/embed/track/6x7r0lpyqxBKGq8J7LFMeu?utm_source=generator",
          description: "This music represents the last breath of my teenage self.", 
          snap:"https://open.spotify.com/embed/album/0f1CZexom6ELxbDZx32fyk?utm_source=generator" 
        },
        
      
      
      {
        cover: 'anti.png',
        author: 'Rihanna',
        albumName: 'Born To Die',
        case: 'anti.png',
        favSong: "https://open.spotify.com/embed/track/7EGtNlu0towVa7NThMHtCv?utm_source=generator",
        description: "Rihanna is one of my favorite singers ever, I love everything she does, but this album is definitely her best musical work in my opinion. It made my ears more interested in R&B and more experimental sounds.",
        snap: "https://open.spotify.com/embed/album/4UlGauD7ROb3YbVOFMgW5u?utm_source=generator" 
      },
      {
        cover: 'beauty-behind-the-madness.png',
        author: 'The Weeknd',
        albumName: 'Born To Die',
        case: 'beauty-behind-the-madness.png',
        favSong: "https://open.spotify.com/embed/track/1mhVXWduD8ReDwusfaHNwU?utm_source=generator",
        description: "This album helped me make peace with the awfulness of life.",
        snap: "https://open.spotify.com/embed/album/0P3oVJBFOv3TDXlYRhGL7s?utm_source=generator"
      },
      {
        cover: 'reflection.png',
        author: 'Fifth Harmony',
        albumName: 'Born To Die',
        case: 'reflection.png',
        favSong: "https://open.spotify.com/embed/track/1COvXs6jaykXC73h9OSBVM?utm_source=generator",
        description: "Another generic album. A catchy and well executed album. Great memories.",
        snap: "https://open.spotify.com/embed/album/0zAsh6hObeNmFgFPrUiFcP?utm_source=generator" 
      },
      {
        cover: '7-27.png',
        author: 'Fifth Harmony',
        albumName: 'Born To Die',
        case: '7-27.png',
        favSong: "https://open.spotify.com/embed/track/23e29alilKhIYF88ifp7We?utm_source=generator",
        description: "Very generic music from 2016. I was obsessed with this back then, I still love this music, and the memories.",
        snap: "https://open.spotify.com/embed/album/0pF0oyuPNdOObniB1Ng0kW?utm_source=generator" 
      },
      {
        cover: 'ultraviolence.png',
        author: 'Lana Del Rey',
        albumName: 'Born To Die',
        case: 'ultraviolence.png',
        favSong: "https://open.spotify.com/embed/track/5Y6nVaayzitvsD5F7nr3DV?utm_source=generator",
        description: "This album changed my musical taste forever. It also helped me understand sadness and pain as part of life.",
        snap: "https://open.spotify.com/embed/album/1ORxRsK3MrSLvh7VQTF01F?utm_source=generator" 
      },
      {
        cover: 'sweet-sexy-savage.png',
        author: 'Kehlani',
        albumName: 'Born To Die',
        case: 'sweet-sexy-savage.png',
        favSong: "https://open.spotify.com/embed/track/0bBgXH6mybXjdngxKF5zBE?utm_source=generator",
        description: "This music put colors back into my life. It was my companion until I got back on march.",
        snap: "https://open.spotify.com/embed/album/4B4in9QlrlYWSHlYSRebdC?utm_source=generator"
      },
      {
        cover: 'badlands.png',
        author: 'Halsey',
        albumName: 'Born To Die',
        case: 'badlands.png',
        favSong: "https://open.spotify.com/embed/track/5Dg2h1wsm7ZijCo0yLmbvR?utm_source=generator",
        description: "This album was the soundtrack of my last teenage year, a very intense and important year in my life.",
        snap: "https://open.spotify.com/embed/album/5OZJflQcQCdZLQjtUudCin?utm_source=generator"
      },
      {
        cover: 'melodrama.png',
        author: 'Lorde',
        albumName: 'Born To Die',
        case: 'melodrama.png',
        favSong: "https://open.spotify.com/embed/track/7ARveOiD31w2Nq0n5FsSf8?utm_source=generator",
        description: "Definitely one of the best pop albums of the year. A mature sound with amazing lyrics. Love the piano and Lorde's voice.",
        snap:"https://open.spotify.com/embed/album/2B87zXm9bOWvAJdkJBTpzF?utm_source=generator" 
      },
      {
        cover: 'euphoria.png',
        author: 'Labrinth',
        albumName: 'Born To Die',
        case: 'euphoria.png',
        favSong: "https://open.spotify.com/embed/track/6N22FZs2ZhPBYi3b9XPajV?utm_source=generator",
        description: "In my opinion one of the best soundtracks of all time. Great selection of sounds, a perfect fit for Euphoria 1st season. Labrinth voice is a-ma-zing.",
        snap: "https://open.spotify.com/embed/album/788r22Bhr3IHLTNPy8pZea?utm_source=generator"
      },
      {
        cover: 'nieve.png',
        author: 'ARON',
        albumName: 'Born To Die',
        case: 'nieve.png',
        favSong: "https://open.spotify.com/embed/track/7nJ2EUcl2qgrp29QHyHDhZ?utm_source=generator",
        description: "Can't say much about this one. I just like it. The lyrics are not that great, but catchy and relatable. A mix of awfulness and calmly energic depression that makes me feel understood.",
        snap:"https://open.spotify.com/embed/album/7N2JnHvKmtzGxOPjr1DcOX?utm_source=generator" 
      },

      {
        cover: 'more-than-you-know.png',
        author: 'Axwell & Ingrosso',
        albumName: 'Born To Die',
        case: 'more-than-you-know.png',
        favSong: "https://open.spotify.com/embed/track/3g66v3lFNy6cLk22PgJOUS?utm_source=generator",
        description: "This EP took me to another galaxy while we were in lookdown. It feels very adventurous, very unapologetic. Conveys a feeling of calm and energy at the same time.",
        snap: "https://open.spotify.com/embed/album/6Ei5WWek37m1x9AjpSXTcJ?utm_source=generator" 
      },
      {
        cover: 'etadgy.png',
        author: 'Molchat Doma',
        albumName: 'Born To Die',
        case: 'etadgy.png',
        favSong: "https://open.spotify.com/embed/track/1SHB1hp6267UK9bJQUxYvO?utm_source=generator",
        description: "They opened my mind to Slavic music. THANKS!!!!!", 
        snap: "https://open.spotify.com/embed/album/1FHREwXgTQvqiG8q5KlRzc?utm_source=generator" 
      },
      {
        cover: 'paycheck.png',
        author: 'Poshlaya Molly',
        albumName: 'Born To Die',
        case: 'paycheck.png',
        favSong: "https://open.spotify.com/embed/track/3SMnPcPNWMzTlsjABF5WRf?utm_source=generator",
        description: "Not my genre, but I loved it and didn't know why, then I realized the sound was kind of similar to music I used to hear in teen series and movies in the early 10's. Now I love synth-russian-ukranian-punk",
        snap:"https://open.spotify.com/embed/album/4c8PkfUv6QLHkFPEqH0yDw?utm_source=generator" 
      },
      {
        cover: 'youth-punk.png',
        author: 'кис-кис',
        albumName: 'Born To Die',
        case: 'youth-punk.png',
        favSong: "https://open.spotify.com/embed/track/4xnQgJy3CcOh8JxlbVXcW7?utm_source=generator",
        description: "This is the freak of the group. Didn't like the overly enthusiastic and playful sound of this album, but I was studying Russian, and this album was constantly played on Alina Olesheva's videos, so I ended up liking the entire thing. There are three songs from this album that I loved from the beginnig though.",
        snap: "https://open.spotify.com/embed/album/5oHFyKzFBV1OEsk7y0ktI3?utm_source=generator" 
      },
      {
        cover: 'skryvaj.png',
        author: 'Nürnberg',
        albumName: 'Born To Die',
        case: 'skryvaj.png',
        favSong: "https://open.spotify.com/embed/track/2R1Yk6vm11P3pLIrtBR4eM?utm_source=generator",
        description: "AMAZING MUSIC. I feel like I'm getting a hug from a fourth dimensional being when listening to this.", 
        snap: "https://open.spotify.com/embed/album/4v7LVUKXfXJwsomhfHaefk?utm_source=generator" 
      },
      {
        cover: 'cassette.png',
        author: 'SadSvit',
        albumName: 'Born To Die',
        case: 'cassette.png',
        favSong: "https://open.spotify.com/embed/track/6AO4EATlH8p6kiXQzPYGEP?utm_source=generator",
        description: "Love SadSvit's work. Love the melancholic slightly enthusiastic sound of his music in general. I feel like this sound is like my thoughts would sound like if they were music",
        snap:"https://open.spotify.com/embed/album/0Wn5sHYtC7vPPX0n2AVJmF?utm_source=generator" 
      },
      {
        cover: 'brol.png',
        author: 'Angèle',
        albumName: 'Born To Die',
        case: 'brol.png',
        favSong: "https://open.spotify.com/embed/track/06O3hxudc6V0BOuoCFSy71?utm_source=generator",
        description: "This album was a disruption to my music taste after listening to too much Russian Post Punk. Didn't convince me at first. It was my reintroduction to French music, after taking the decision of studying French.",
        snap:"https://open.spotify.com/embed/album/6KSvWFf4g4PrIldtchJsTC?utm_source=generator" 
      },
      {
        cover: 'nonante-cinq.png',
        author: 'Angèle',
        albumName: 'Born To Die',
        case: 'nonante-cinq.png',
        favSong: "https://open.spotify.com/embed/track/6IkCln4loRwYQ16dIX3zej?utm_source=generator",
        description: "Angèle's music was already a great part of my playlist at this point, and here I could find more than a couple of pop songs that were eye opening, in the sense that they were very different from the usual queen-pop music I've been listening to, being someone mainly exposed by American pop culture.",
        snap: "https://open.spotify.com/embed/album/2hQ9QcZ4VkoeBdBo1JNG64?utm_source=generator" 
      },
      {
        cover: 'uitzinning.png',
        author: 'Froukje',
        albumName: 'Born To Die',
        case: 'uitzinning.png',
        favSong: "https://open.spotify.com/embed/track/0keQSnGOvLLWZtbVS6kKyY?utm_source=generator",
        description: "I loved 'Ik Will Dansen' and then I loved this. Again, this is music I usually don't like, but it grew in me, mostly because parts of the album sometimes played after listening to 'Ik will dansen' too much. Then I watched a video of the band playing live and I was in awe, their performance and sound mix is so good I prefer listening to their live presentations.",
        snap:"https://open.spotify.com/embed/album/1uAimajt3zW6EGLIE83jnc?utm_source=generator" 
      },
      {
        cover: 'trash-island.png',
        author: 'Thaiboy Digital * Bladee * Ecco2k',
        albumName: 'Trash Island',
        case: 'trash-island.png',
        favSong: "https://open.spotify.com/embed/track/1zX178V8sWozr96MrfmRun?utm_source=generator",
        description: "This is what some call trash music, and it is in some ways, but this transmits an euphoric and warm vibe, like, ethereal feelings that makes me enjoy life.",
        snap: "https://open.spotify.com/embed/album/30zy3JHuDxZbBWGf8rGZGX?utm_source=generator" 
      },
      {
        cover: 'starz.png',
        author: 'Yung Lean',
        albumName: 'Starz',
        case: 'starz.png',
        favSong: "https://open.spotify.com/embed/track/3ULEHJxcQuFWCoRc7AYncF?utm_source=generator",
        description: "Amazing music that surprised me in a very positive way. Love the feeling of this sound. This would probably be part of the soundtrack of my life.",
        snap: "https://open.spotify.com/embed/album/4NESArVYihJKvoXk1eYE8A?utm_source=generator" 
      },
      {
        cover: 'club-romantech.png',
        author: 'Icona Pop',
        albumName: 'Club Romantech',
        case: 'club-romantech.png',
        favSong: "https://open.spotify.com/embed/track/16Cv47YFbROCj4fzuxo7Z6?utm_source=generator",
        description: "Sometimes I go back in time and review my old playlists, listen to some artists I didn't listen to in a long time, and sometimes, when I'm curious, I look for their modern work, or what the artist is up to in this moment, that's how I found this album. I feel lucky this was released just months before I found it. In my opinion, the best album in electronic music from the last 4 years. Love their style, and the kind of music they mix. It just sounds beautiful.",
        snap: "https://open.spotify.com/embed/album/29aOgoHgr7C2J27gGfJdEz?utm_source=generator" 
      },
      {
        cover: 'echo.png',
        author: 'Romeo Elvis',
        albumName: 'Écho',
        case: 'echo.png',
        favSong: "https://open.spotify.com/embed/track/7wafptfEroZpxE6dOsjRE4?utm_source=generator",
        description: "I was studying French, and for me to want to learn a language I need to like lots of content and creators. I was stalking Angèle when I found her brother was a rapper. I should say this album is great, the sound, the lyrics and the artistic direction is on point, I love it. My favorites from this album are Hier Soir and Tadumal.",
        snap: "https://open.spotify.com/embed/album/6a4UniWWCtgVOHQypWKtrj?utm_source=generator" 
      },
      {
        cover: 'tete-brulee.png',
        author: 'Iliona',
        albumName: 'Tête Brûlée',
        case: 'tete-brulee.png',
        favSong: "https://open.spotify.com/embed/track/6Dt6avd8V0rBotNLj9yMy3?utm_source=generator",
        description: "I found this music by chance when looking for new music on Youtube. I have to say that this is one of the artists that surprised me the most from the first moment. It was like finding Françoise Hardy, but with a 2020 touch. I feel like this album doesn't try to be something, it just is, flows.",
        snap: "https://open.spotify.com/embed/album/6bdnYaYOkqDq9aXNgXNx3f?utm_source=generator" 
      },
    ]
  }