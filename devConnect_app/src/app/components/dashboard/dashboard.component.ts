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
import { GroupInfoComponent } from '../group-info/group-info.component';
import {Router} from '@angular/router'
// import { HeaderComponent } from '.';
// import { SideNavComponent } from './components/side-nav/side-nav.component';
// import { MainContentComponent } from './components/main-content/main-content.component';
// import { RightInfoComponent } from './components/right-info/right-info.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RightInfoComponent,HeaderComponent,SideNavComponent,MainContentComponent,CommonModule,GroupDisplayComponent,BookmarksDisplayComponent,GroupInfoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription;
  receivedMessage: string = '';
  constructor(private tabManagement : TabManagement, private router : Router){
  }

  displayFeed : boolean = true;
  displayGroup : boolean = false;
  displayBookmark : boolean = false;
  displayGroupInfo : boolean = false;
  id:string = ''

  ngOnInit() {
    this.subscription = this.tabManagement.eventEmitter.subscribe(
      (message: string) => {
        let newMessage = [];
        
        if (message.includes("&")) {
          newMessage = message.split("&")
          message = newMessage[0];
          this.id = newMessage[1];
        }
        if (message === "feed") {
          this.displayFeed = true;
          this.displayGroup = false;
          this.displayBookmark = false
          this.displayGroupInfo = false;
        }

        if (message === "group") {
          this.displayFeed = false;
          this.displayGroup = true;
          this.displayBookmark = false;
          this.displayGroupInfo = false;
        }

        if (message === "bookmark") {
          this.displayFeed = false;
          this.displayGroup = false;
          this.displayBookmark = true
          this.displayGroupInfo = false;
          
        }

        if (message === "showGroupInfo") {
          this.displayFeed = false;
          this.displayGroup = false;
          this.displayBookmark = false
          this.displayGroupInfo = true;
        }
      }
    );
  }

}
