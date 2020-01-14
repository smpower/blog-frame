import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, WelcomeComponent, PageNotFoundComponent } from './pages/';
import { ToolbarComponent, SidenavComponent, SidenavContentComponent } from './components/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    SidenavComponent,
    SidenavContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
