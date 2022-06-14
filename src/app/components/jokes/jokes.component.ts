import { Component } from '@angular/core';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokes = [
    {
      question: 'Why did the programmer quit his job?',
      answer: "Because he didn't get arrays.",
    },
    {
      question: 'HoW do you tell HTML from HTML5?',
      answer: "Open it in Internet Explorer. Did it work? No? It's HTML5",
    },
  ] as Joke[];
}
