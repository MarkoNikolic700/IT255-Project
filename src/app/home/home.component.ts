import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { RoomServiceService } from '../services/room-service.service';
import { Hotel } from '../hotel/hotel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'MetHotels';
  hotels: Hotel[];
  prikazivanje: Hotel[];
  cenaRoomServisa = 0;

  constructor(private _hotelService: HotelService, private  _roomService: RoomServiceService ) {
  }

  ngOnInit() {
      this.hotels = this._hotelService.getHotels();
      this.updatePrikazivanje();
  }

  randomize(): void {
    this._hotelService.randomize();
    this.updatePrikazivanje();
  }

  filter(event: any): void {
    const maxPrice = event.target.value;
    this._hotelService.filter(maxPrice);
    this.updatePrikazivanje();
  }

  dodajHotel(hotel: Hotel): void {
    this._hotelService.dodajHotel(hotel);
    this.updatePrikazivanje();
  }

  brisiHotel(hotel: Hotel): void {
    this._hotelService.brisiHotel(hotel);
    this.updatePrikazivanje();
  }

  updatePrikazivanje() {
    this.prikazivanje = this._hotelService.getPrikazivanje();
  }

  izracunajRoomServis(event: any) {
    const brojNocenja = event.target.value;
    this.cenaRoomServisa = this._roomService.getPrice(brojNocenja);
  }
  

}
