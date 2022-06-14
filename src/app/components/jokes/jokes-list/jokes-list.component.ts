import { Component, Input } from '@angular/core';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokes: Joke[] | undefined;
}
