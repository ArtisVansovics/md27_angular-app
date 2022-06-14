import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent implements OnInit {
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
    console.log(this.jokesForm.value);
  }
}
