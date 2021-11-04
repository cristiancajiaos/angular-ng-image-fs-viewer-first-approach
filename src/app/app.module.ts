import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    NgImageFullscreenViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
