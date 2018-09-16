import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-store';
import { ROLES } from '../shared/constants/roles';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    private logged: boolean;
    public user = {
        name: '',
        surname: '',
        role: {
            name: '',
            id: 0
        }
    };

    constructor(private router: Router, private localStorageService: LocalStorageService) {

        // this.logged = this.localStorageService.get('token');
        // this.user = this.localStorageService.get('user');
    }

    ngOnInit() {
        // if (!this.logged) {
        // this.router.navigate(['auth/sign-in']);
        // } else if (this.user.role.id === ROLES.Provider) {
        // this.router.navigate(['admin/product-management']);
        // }

    }

    logout() {
        this.localStorageService.clear('all');
        this.router.navigate(['auth/sign-in']);
    }
}
