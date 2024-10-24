import { Component , ViewChild} from '@angular/core';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { GroupService } from '../../services/group-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CreateGroupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private groupService : GroupService) {

  }

  @ViewChild(CreateGroupComponent)
  child: CreateGroupComponent = new CreateGroupComponent(this.groupService);

  createGroupClick(){
    this.child.toggleShow();
  }
}

