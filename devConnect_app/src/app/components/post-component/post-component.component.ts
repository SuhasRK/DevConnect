import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post-component',
  standalone: true,
  imports: [],
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css'
})
export class PostComponentComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imageUrl: string | null = null;
  @Input() code: string = '';
}
