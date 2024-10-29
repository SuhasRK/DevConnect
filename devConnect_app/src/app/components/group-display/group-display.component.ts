import { Component, OnInit } from '@angular/core';
import { PostComponentComponent } from '../post-component/post-component.component';
import { CommonModule } from '@angular/common';
import { GroupService } from '../../services/group-service.service';
import { TabManagement } from '../../services/tab-management.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group-display',
  standalone: true,
  imports: [PostComponentComponent,CommonModule],
  templateUrl: './group-display.component.html',
  styleUrl: './group-display.component.css'
})
export class GroupDisplayComponent implements OnInit{

  groupsByAdmin : any= [];
  allGroups : any = [];
  loading : boolean = true;
  error : boolean = false;

  constructor(private groupService : GroupService, private tabManagement : TabManagement, private router : Router){

  }
  ngOnInit(): void {

    this.getGroupById();
    this.getAllGroups();
    
  }

  getGroupById() {
    let adminId = sessionStorage.getItem('id') as string;
    try{
      this.groupService.getGroupById(adminId).subscribe((data)=>{
        this.groupsByAdmin = data;
        this.loading = false;
      })
    }
    catch(error){
      this.error = true;
      this.loading = false;
    }

  }

  getAllGroups() {
    try{
      this.groupService.getAllGroups().subscribe((data)=>{
        this.allGroups = data;
        this.loading = false;
      })
    }
    catch(error){
      this.error = true;
      this.loading = false;
    }

  }

  handleButtonClick(event : any) {
    this.tabManagement.emitEvent("showGroupInfo"+"&"+event.id);
  }

}
