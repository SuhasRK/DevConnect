import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabManagement } from '../../services/tab-management.service';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{

  feed :string  = "feed";
  group :string  = "group";
  bookmark :string  = "bookmark";

  constructor(private tabManagement : TabManagement){

  }

  userObject : any = {};

  userName : string = '';
  userEmail : string = '';

  ngOnInit(): void {

  }

  sendTabName(tabName : string){
    this.tabManagement.emitEvent(tabName);
  }


}
