import {Component, OnInit} from '@angular/core';
import { Hotel } from "./hotel/hotel.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MetHotels';
  hotels: Hotel[];
  prikazivanje: Hotel[];
  cenaRoomServisa = 0;

  constructor(private router: Router) {
  }

  ngOnInit() {
      
  }

}
