import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-info.component.html',
  styleUrl: './right-info.component.css'
})
export class RightInfoComponent {
  tags: string[] = ['angular', 'typescript', 'node', 'bodyParser','Html','CSS'];
}
