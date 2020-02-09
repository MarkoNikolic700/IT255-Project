import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Hotel} from '../hotel/hotel.model';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-dodati-hotel',
  templateUrl: './dodati-hotel.component.html',
  styleUrls: ['./dodati-hotel.component.css']
})
export class DodatiHotelComponent implements OnInit {

  @Output() onButtonAddPressed: EventEmitter<Hotel> ;
  myForm: FormGroup;
  name: FormControl;
  location: FormControl;
  price: FormControl;

  constructor() {
    this.onButtonAddPressed = new EventEmitter();
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  dodajHotel(): void {
    if (this.myForm.valid) {
      this.onButtonAddPressed.emit(new Hotel(this.myForm.value.name, this.myForm.value.price, this.myForm.value.location));
      this.myForm.reset();
    }
  }

  createFormControls() {
      this.name = new FormControl('', [Validators.required, this.imeHotelaValidator]);
      this.location = new FormControl('', Validators.required);
      this.price = new FormControl('', Validators.required);

  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      location: this.location,
      price: this.price
    });
  }

   imeHotelaValidator(control: FormControl) {
    const name = control.value;
    if (name.length < 7) {
      return { imeHotelaGreska: {Name: name} };
    }
    return null;
  }


}
