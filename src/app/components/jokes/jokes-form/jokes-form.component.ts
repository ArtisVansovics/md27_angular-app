import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent implements OnInit {
  @Output() addJokeEvent = new EventEmitter<Joke>();

  jokesForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  buildForm(): void {
    this.jokesForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  addJoke(): void {
    if (this.jokesForm.valid) {
      this.addJokeEvent.emit({
        question: this.jokesForm.value.question,
        answer: this.jokesForm.value.answer,
      });
      this.jokesForm.reset();
    }
  }
}
