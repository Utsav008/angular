import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpsidebarComponent } from './frame/upsidebar/upsidebar.component';
import { SidebarComponent } from './frame/sidebar/sidebar.component';
import { BottemComponent } from './frame/bottem/bottem.component';
import { FooterComponent } from './frame/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UpsidebarComponent,
    SidebarComponent,
    BottemComponent,
    FooterComponent,
    AboutComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
