import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseShelveComponent } from './components/base-shelve/base-shelve.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfLevelsComponent } from './components/shelf-levels/shelf-levels.component';
import { AudioArtifactsComponent } from './components/audio-artifacts/audio-artifacts.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseShelveComponent,
    ShelfItemComponent,
    ShelfLevelsComponent,
    AudioArtifactsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
