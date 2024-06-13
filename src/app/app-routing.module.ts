import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiriyaniComponent } from './navbar/cuisines/biriyani/biriyani.component';
import { ChineseComponent } from './navbar/cuisines/chinese/chinese.component';
import { ContinentalComponent } from './navbar/cuisines/continental/continental.component';
import { CuisinesComponent } from './navbar/cuisines/cuisines.component';
import { DessertsComponent } from './navbar/cuisines/desserts/desserts.component';
import { DrinksComponent } from './navbar/cuisines/drinks/drinks.component';
import { NorthComponent } from './navbar/cuisines/north/north.component';
import { SouthComponent } from './navbar/cuisines/south/south.component';
import { DataComponent } from './navbar/data/data.component';
import { ViewComponent } from './navbar/data/view/view.component';
import { AndhraComponent } from './navbar/places/andhra/andhra.component';
import { PlacesComponent } from './navbar/places/places.component';
import { TamilComponent } from './navbar/places/tamil/tamil.component';
import { TelenganaComponent } from './navbar/places/telengana/telengana.component';
import { UpComponent } from './navbar/places/up/up.component';
import { QuestionComponent } from './navbar/question/question.component';
import { ViewqComponent } from './navbar/question/viewq/viewq.component';
import { TableauComponent } from './navbar/tableau/tableau.component';
import { ViewtComponent } from './navbar/tableau/viewt/viewt.component';

const routes: Routes = [
  {
    path:'data',
    component:DataComponent,
    outlet:'navbar',
  },
  {
    path:'data/view',
    component:ViewComponent,
    outlet:'maincontent'
  },
  {path:'tableau',component:TableauComponent,outlet:'navbar'},
  {path:'tableau/viewt',component:ViewtComponent,outlet:'maincontent'},
  {path:'places',component:PlacesComponent,outlet:'navbar'},
  {path:'places/andhra',component:AndhraComponent,outlet:'maincontent'},
  {path:'places/tamil',component:TamilComponent,outlet:'maincontent'},
  {path:'places/telengana',component:TelenganaComponent,outlet:'maincontent'},
  {path:'places/up',component:UpComponent,outlet:'maincontent'},
  {path:'cuisines',component:CuisinesComponent,outlet:'navbar'},
  {path:'cuisines/desserts',component:DessertsComponent,outlet:'maincontent'},
  {path:'cuisines/north',component:NorthComponent,outlet:'maincontent'},
  {path:'cuisines/south',component:SouthComponent,outlet:'maincontent'},
  {path:'cuisines/chinese',component:ChineseComponent,outlet:'maincontent'},
  {path:'cuisines/continental',component:ContinentalComponent,outlet:'maincontent'},
  {path:'cuisines/drinks',component:DrinksComponent,outlet:'maincontent'},
  {path:'cuisines/biriyani',component:BiriyaniComponent,outlet:'maincontent'},
  {path:'question',component:QuestionComponent,outlet:'navbar'},
  {path:'question/viewq',component:ViewqComponent,outlet:'maincontent'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
