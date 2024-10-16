import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()

export class AuthGuardService implements CanActivate {
    canActivate() : boolean{
        if(localStorage.getItem('token')){
            return true;
        }
        return false;
    }
}