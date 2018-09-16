import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-store';


declare interface SignInData {
    email: string;
    password: string;
}

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
    public userData: SignInData;

    constructor(private auth: AuthService, private router: Router, private localStorageService: LocalStorageService) {
        this.userData = { email: '', password: '' };
    }

    ngOnInit() {
        console.log('sign in is loaded');
    }

    signIn() {
        console.log(this.userData);
        this.router.navigate(['admin']);
        // this.auth.signIn(this.userData)
        //     .subscribe(data => {
        //         if (data['success']) {
        //             this.localStorageService.set('token', data['data']['token']);
        //             this.localStorageService.set('user', data['data']['user']);
        //             this.router.navigate(['admin']);
        //         }
        //         console.log(data);
        //     });
    }

}
