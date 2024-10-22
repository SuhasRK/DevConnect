import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(environment.backendURL + '/posts/getAllPosts/');
  }

  uploadPost(formValue : any) {
    let postData = {
      title : formValue.title,
      mainData : formValue.mainData,
      userId : sessionStorage.getItem('id'),
      likeCount : 0
    }
    return this.http.post(environment.backendURL+'/posts/uploadPost',postData);
  }

  

}
