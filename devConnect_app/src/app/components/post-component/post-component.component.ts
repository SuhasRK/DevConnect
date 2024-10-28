import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css'
})
export class PostComponentComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imageUrl: string | null = null;
  @Input() code: string = '';
  @Input() showButton: boolean = true;
}
