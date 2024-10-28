import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  createGroup(formValue : any) {
    let groupData = {
      groupName : formValue.groupName,
      description : formValue.description,
      adminId : sessionStorage.getItem('id'),
    }
    return this.http.post(environment.backendURL+'/group/createGroup',groupData);
  }

  getAllGroups() {
    return this.http.get(environment.backendURL+'/group/getGroups');
  }

  getGroupById(adminId : string) {
    return this.http.get(environment.backendURL+'/group/getGroupById?adminId=' + adminId);
  }

}