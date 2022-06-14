import { Component, Input } from '@angular/core';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @Input() joke: Joke | undefined;

  showAnswer = false;

  toggleAnswerVisibility() {
    this.showAnswer = !this.showAnswer;
  }
}
