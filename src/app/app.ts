import { Component, signal } from '@angular/core';
import { AiInputComponent } from './components/ai-input/ai-input';

@Component({
  selector: 'app-root',
  imports: [
    AiInputComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-form-formai-angular');
}
