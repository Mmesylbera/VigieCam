import { Component, signal } from '@angular/core';
import { Login } from './features/auth/login/login';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Login, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('vigiecam');
}
