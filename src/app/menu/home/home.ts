import { Component } from '@angular/core';
import { SliderComponent } from '../../slider/slider';

@Component({
  selector: 'app-home',
  imports: [SliderComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
