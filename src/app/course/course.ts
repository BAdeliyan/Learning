import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {}
