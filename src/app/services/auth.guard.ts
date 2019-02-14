import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authservice: AuthService) { }

    canActivate() {
        if (this.authservice.isAuthenticated()) {
            return true;
        } else {
            this.authservice.login();
        }
    }
}
