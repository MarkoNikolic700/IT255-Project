import {Component, OnInit, Input, HostBinding, Output, EventEmitter} from '@angular/core';
import { Hotel } from './hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() hotel: Hotel;
  @Output() brisi: EventEmitter<Hotel>;

  constructor() {
    this.brisi = new EventEmitter();
  }

  ngOnInit() {
  }

  obrisi(hotel: Hotel): void{
    this.brisi.emit(hotel);
  }
}
