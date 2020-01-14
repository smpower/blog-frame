import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToolbarComponent,
    HomeComponent,
    SidenavComponent,
    SidenavContentComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
