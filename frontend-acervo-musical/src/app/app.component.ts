import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-acervo-musical';
  nome = 'UTFPR';
  idade = 10;

  idade2 = 30;

  getIdade(){
    return this.idade2;
  }
}
