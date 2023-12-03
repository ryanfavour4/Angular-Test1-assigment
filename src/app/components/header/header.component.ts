import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor() {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getUsername() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.username;
    }
    return '';
  }

  getRole() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.role;
    }
    return '';
  }

  getUserId() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.id;
    }
    return '';
  }
}
