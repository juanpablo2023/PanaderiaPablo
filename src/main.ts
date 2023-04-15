import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hola soy  {{name}}!</h1>
    <h2>y estoy aprendiendo {{curso}}!</h2>
    <h2>con {{lenguaje}}!</h2>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Pablo';
  curso = 'Desarrollo web con: ';
  lenguaje = 'Angular ';
}

bootstrapApplication(App);
