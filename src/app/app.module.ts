import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HelpersPipe } from './filter/helpers.pipe';
import { DodatiHotelComponent } from './dodati-hotel/dodati-hotel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HotelService} from './hotel.service';
import {RoomServiceService} from './services/room-service.service';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
    ];

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HelpersPipe,
    DodatiHotelComponent,
    HomeComponent, 
    AboutComponent, 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HotelService, RoomServiceService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
