import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { StatsComponent } from './charactersheet/stats/stats.component';
import { TalentsComponent } from './charactersheet/talents/talents.component';
import { AsideLeftComponent } from './aside-left/asideleft.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';

const routes = [
  { path: 'charactersheet', component: CharacterSheetComponent },
  { path: 'printsheet', component: PrintSheetComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterSheetComponent,
    StatsComponent,
    TalentsComponent,
    AsideLeftComponent,
    PrintSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
