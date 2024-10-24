import { Component , OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { RightInfoComponent } from '../right-info/right-info.component';
import { CommonModule } from '@angular/common';
import { TabManagement } from '../../services/tab-management.service';
import { Subscription } from 'rxjs';
import { GroupDisplayComponent } from '../group-display/group-display.component';
import { BookmarksDisplayComponent } from '../bookmarks-display/bookmarks-display.component';
// import { HeaderComponent } from '.';
// import { SideNavComponent } from './components/side-nav/side-nav.component';
// import { MainContentComponent } from './components/main-content/main-content.component';
// import { RightInfoComponent } from './components/right-info/right-info.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RightInfoComponent,HeaderComponent,SideNavComponent,MainContentComponent,CommonModule,GroupDisplayComponent,BookmarksDisplayComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription;
  receivedMessage: string = '';
  constructor(private tabManagement : TabManagement){
  }

  displayFeed : boolean = true;
  displayGroup : boolean = false;
  displayBookmark : boolean = false;


  ngOnInit() {
    this.subscription = this.tabManagement.eventEmitter.subscribe(
      (message: string) => {
        if (message === "feed") {
          this.displayFeed = true;
          this.displayGroup = false;
          this.displayBookmark = false
        }

        if (message === "group") {
          this.displayFeed = false;
          this.displayGroup = true;
          this.displayBookmark = false;
        }

        if (message === "bookmark") {
          this.displayFeed = false;
          this.displayGroup = false;
          this.displayBookmark = true
        }
      }
    );
  }

}
