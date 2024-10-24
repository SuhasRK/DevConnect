import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

//   getAllPosts() {
//     return this.http.get(environment.backendURL + '/posts/getAllPosts/');
//   }

  createGroup(formValue : any) {
    let groupData = {
      groupName : formValue.groupName,
      description : formValue.description,
      adminId : sessionStorage.getItem('id'),
    }
    console.log(groupData);
    return this.http.post(environment.backendURL+'/group/createGroup',groupData);
  }

  

}