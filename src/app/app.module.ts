import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseShelveComponent } from './components/base-shelve/base-shelve.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfLevelsComponent } from './components/shelf-levels/shelf-levels.component';
import { AudioArtifactsComponent } from './components/audio-artifacts/audio-artifacts.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseShelveComponent,
    ShelfItemComponent,
    ShelfLevelsComponent,
    AudioArtifactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
