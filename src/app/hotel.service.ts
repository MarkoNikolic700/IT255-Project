import { Injectable } from '@angular/core';
import { Hotel } from './hotel/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotels: Hotel[];
  prikazivanje: Hotel[];

  constructor() { this.hotels = [
    new Hotel('M', 75, 'Bulevar Oslobodjenja'),
    new Hotel('Hilton', 120, 'Bulevar Zorana Djindjica'),
    new Hotel('Balkan', 135, 'Borska bb'),
    new Hotel('Beograd', 49, 'Balkanska 53'),
  ];
    this.prikazivanje = Object.assign([], this.hotels);
  }

  getHotels() {
    return this.hotels;
  }

  getPrikazivanje(){
    return this.prikazivanje;
  }

  randomize(): void {
    let m = this.prikazivanje.length;
    let t;
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.prikazivanje[m];
      this.prikazivanje[m] = this.prikazivanje[i];
      this.prikazivanje[i] = t;
    }
  }

  filter(maxPrice): void {
    this.prikazivanje = Object.assign([], this.hotels);
    for (let i = this.prikazivanje.length - 1; i >= 0; i--) {
      if (this.prikazivanje[i].price > maxPrice && maxPrice > 0) {
        this.prikazivanje.splice(i, 1);
      }

      if (this.prikazivanje.length === 0) {
        this.prikazivanje.push(new Hotel('Nazalost nemamo hotele za tu cijenu', 0, 'pokusajte povecati cijenu'));
      }
    }
  }

  dodajHotel(hotel: Hotel): void {
    this.hotels.push(hotel);
    this.prikazivanje = Object.assign([], this.hotels);
  }

  brisiHotel(hotel: Hotel): void {
    for (let i = this.hotels.length - 1; i >= 0; i--) {
      if (this.hotels[i] === hotel) {
        this.hotels.splice(i, 1);
      }

    }
    this.prikazivanje = Object.assign([], this.hotels);
  }

}
