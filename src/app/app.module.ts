import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { CuisinesComponent } from './navbar/cuisines/cuisines.component';
import { DataComponent } from './navbar/data/data.component';
import { PlacesComponent } from './navbar/places/places.component';
import { QuestionComponent } from './navbar/question/question.component';
import { TableauComponent } from './navbar/tableau/tableau.component';
import { ViewComponent } from './navbar/data/view/view.component';
import { AndhraComponent } from './navbar/places/andhra/andhra.component';
import { TamilComponent } from './navbar/places/tamil/tamil.component';
import { TelenganaComponent } from './navbar/places/telengana/telengana.component';
import { UpComponent } from './navbar/places/up/up.component';
import { DessertsComponent } from './navbar/cuisines/desserts/desserts.component';
import { NorthComponent } from './navbar/cuisines/north/north.component';
import { SouthComponent } from './navbar/cuisines/south/south.component';
import { ChineseComponent } from './navbar/cuisines/chinese/chinese.component';
import { BiriyaniComponent } from './navbar/cuisines/biriyani/biriyani.component';
import { ContinentalComponent } from './navbar/cuisines/continental/continental.component';
import { DrinksComponent } from './navbar/cuisines/drinks/drinks.component';
import { ViewtComponent } from './navbar/tableau/viewt/viewt.component';
import { ViewqComponent } from './navbar/question/viewq/viewq.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TitleComponent,
    SidebarComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent,
    CuisinesComponent,
    DataComponent,
    PlacesComponent,
    QuestionComponent,
    TableauComponent,
    ViewComponent,
    AndhraComponent,
    TamilComponent,
    TelenganaComponent,
    UpComponent,
    DessertsComponent,
    NorthComponent,
    SouthComponent,
    ChineseComponent,
    BiriyaniComponent,
    ContinentalComponent,
    DrinksComponent,
    ViewtComponent,
    ViewqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
