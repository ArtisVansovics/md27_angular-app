import { Component } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes = [] as Joke[];
}
