import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftsideBarComponent } from './leftside-bar/leftside-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsideBarComponent,
    MainSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
