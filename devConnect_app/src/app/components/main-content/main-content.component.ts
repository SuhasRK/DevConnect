import { Component, OnInit } from '@angular/core';
import { PostComponentComponent } from '../post-component/post-component.component';
import { PostService } from '../../services/post-service.service';
import { CommonModule } from '@angular/common';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [PostComponentComponent,CommonModule,FormsModule,ReactiveFormsModule],
  providers:[],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{

  allPosts : any = [];
  loading : boolean = true;
  error : boolean = false;

  constructor(private postService : PostService ){

  }
  
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((data)=>{
      this.allPosts = data;
      this.loading = false;
    },error=>{
      this.error = true;
      this.loading = false;
    })
  }

  postform = new FormGroup({
    title : new FormControl('',Validators.required),
    mainData : new FormControl('',Validators.required)
  })

  onSubmit() {
    // console.log(this.postform.value);
    this.postService.uploadPost(this.postform.value).subscribe((res : any)=>{
      if (res.message == 'success') {
        this.getAllPosts();
      }
      this.clearForm();
    })
  }

  clearForm(): void {
    this.postform.reset(); // This will reset the form to initial values
  }
}
