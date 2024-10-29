import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-info',
  standalone: true,
  imports: [],
  templateUrl: './group-info.component.html',
  styleUrl: './group-info.component.css'
})
export class GroupInfoComponent implements OnInit{

  @Input() groupId : string = '';

  ngOnInit(): void {
    console.log(this.groupId);
  }

}
