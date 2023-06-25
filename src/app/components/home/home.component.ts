import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
  
export class HomeComponent {
  num1 = 0;
  num2 = 0;
  operator = '+';
  result = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  sound = true;

  calculatorForm = new FormGroup({
    answer: new FormControl('', Validators.required),
  });

  constructor() {}

  generateNumbers(): void {
    this.num1 = Math.round(Math.random() * 100);
    this.num2 = Math.round(Math.random() * 100);

    this.result = Math.round(this.calculateResult());
  }

  calculateResult(): number {
    return eval(`${this.num1} ${this.operator} ${this.num2}`);
  }

  checkAnswer(): void {
    this.stopSound();

    const answer = Number(this.calculatorForm.get('answer')?.value);
    if (answer === this.result) {
      this.correctAnswers++;
      this.sound && this.playSound("correct");
    } else {
      this.wrongAnswers++;
      this.sound && this.playSound("incorrect");
    }

    this.resetScores(false)
  }

  resetScores(resetNumbers: boolean): void {
    this.generateNumbers();
    this.calculatorForm.reset();

    if (resetNumbers) {
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    }
  }

  playSound(type: string): void {
    const sound = <HTMLAudioElement>(
      document.getElementById(`${type}Sound`)
    );
    sound.play();
  }

  soundEffectsChanged(): void {
    this.sound && this.stopSound();
    this.sound = !this.sound;
  }

  stopSound(): void {
    let correctSound = <HTMLAudioElement>(
      document.getElementById('correctSound')
    );
    correctSound.pause();
    correctSound.currentTime = 0;

    let inCorrectSound = <HTMLAudioElement>(
      document.getElementById('incorrectSound')
    );
    inCorrectSound.pause();
    inCorrectSound.currentTime = 0;

    let introSound = <HTMLAudioElement>document.getElementById('introSound');
    introSound.pause();
    introSound.currentTime = 0;
  }

  ngOnInit(): void {
    this.generateNumbers();
  }
}
