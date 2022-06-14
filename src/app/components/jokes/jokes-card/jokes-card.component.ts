import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @Input() joke: Joke | undefined;

  @Output() deleteTaskEvent = new EventEmitter<null>();

  showAnswer = false;

  toggleAnswerVisibility() {
    this.showAnswer = !this.showAnswer;
  }

  deleteJoke(): void {
    this.deleteTaskEvent.emit();
  }
}
