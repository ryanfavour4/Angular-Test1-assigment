import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  dateOfBirth: string = '';
  carBrand: string = '';
  carBodyType: string = '';
  regNo: string = '';

  items = [
    { name: 'Toyota', model: 'Corolla' },
    { name: 'Toyota', model: 'Camry' },
    { name: 'Honda', model: 'Accord' },
    { name: 'Honda', model: 'Civic' },
  ];
  bodyType = [
    { type: 'Car', price: '15000' },
    { type: 'SUV', price: '20000' },
    { type: 'Truck', price: '100000' },
    { type: 'Van', price: '20000' },
  ];

  onSubmit() {
    // USE IF STATEMENT TO SEE WHAT VALUE IS EMPTY AND SHOW AN ALERT, ELSE SUBMIT TO DB.
    console.log('Form Submitted');
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.phoneNumber);
    console.log(this.dateOfBirth);
    console.log(this.carBrand);
    console.log(this.carBodyType);
    console.log(this.regNo);
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    // FORMAT EVERYTHING TO BE EMPTY LATER...
  }
}
