import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {

  counter: number = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }

}

