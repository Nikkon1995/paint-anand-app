import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './app-main/navbar-component/navbar-component.component';
import { BodyComponentComponent } from './app-main/body-component/body-component.component';
import { FooterComponentComponent } from './app-main/footer-component/footer-component.component';
import { AppMainComponent } from './app-main/app-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    AppMainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
