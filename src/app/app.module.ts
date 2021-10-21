import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { OffrespecialComponent } from './offrespecial/offrespecial.component';
import { QualityComponent } from './quality/quality.component';
import { MenuComponent } from './menu/menu.component';
import { GalerryComponent } from './galerry/galerry.component';
import { ReviewComponent } from './review/review.component';
import { ContactComponent } from './contact/contact.component';
import { PartenaireComponent } from './partenaire/partenaire.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TestComponent,
    AboutComponent,
    OffrespecialComponent,
    QualityComponent,
    MenuComponent,
    GalerryComponent,
    ReviewComponent,
    ContactComponent,
    PartenaireComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
