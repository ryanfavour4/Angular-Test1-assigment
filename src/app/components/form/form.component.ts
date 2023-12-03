import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
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
}
