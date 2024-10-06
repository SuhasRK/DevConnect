import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { RightInfoComponent } from '../right-info/right-info.component';
// import { HeaderComponent } from '.';
// import { SideNavComponent } from './components/side-nav/side-nav.component';
// import { MainContentComponent } from './components/main-content/main-content.component';
// import { RightInfoComponent } from './components/right-info/right-info.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RightInfoComponent,HeaderComponent,SideNavComponent,MainContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
