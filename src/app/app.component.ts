import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FormComponent,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'TodoList';
  count: number = 0;

  constructor() {}

  ngOnInit() {
    console.log('I DON LAND');

    setInterval(() => {
      this.count++;
      console.log('Increased count to', +this.count);
    }, 1000);
  }

  // MAKE FUNCTION TO INCREMENT AND DECREMENT THE COUNTER
  increment() {
    this.count++;
    console.log(this.count);
  }

  decrement() {
    this.count--;
    console.log(this.count);
  }

  mutateBy(val: number) {
    this.count += val;
    console.log(this.count);
  }
}
