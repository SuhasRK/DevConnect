import { Component , ViewChild} from '@angular/core';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CreateGroupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild(CreateGroupComponent)
  child: CreateGroupComponent = new CreateGroupComponent;

  createGroupClick(){
    this.child.toggleShow();
  }
}

