import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './shared/component/movie/movie.component';
import { CardComponent } from './shared/component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
