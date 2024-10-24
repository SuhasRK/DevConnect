import { Component,HostListener , OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupService } from '../../services/group-service.service';

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.css'
})
export class CreateGroupComponent implements OnInit{
  
  constructor(private groupService : GroupService){

  }
  parentEle : any;
  @HostListener('document:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    if (event.target == this.parentEle){
      this.clickCancel();
    }
  }

  groupForm = new FormGroup({
    groupName : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    this.parentEle = document.getElementById('parent');
  }
  

  toggleShow() {
    this.parentEle.style.display = 'block';
  }


  clickCancel(){
    this.parentEle.style.display = 'none';
    this.groupForm.reset();
  }

  onSubmit(){
    console.log(this.groupForm.value)
    this.groupService.createGroup(this.groupForm.value).subscribe((res : any)=>{
      if (res.message === 'success') {
        console.log('New group created');
      }
    })
  }
  

  
}
