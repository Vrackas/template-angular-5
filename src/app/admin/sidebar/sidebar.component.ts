import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { ROLES } from '../../shared/constants/roles';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    access: Array<number>;
}

export const ROUTES: RouteInfo[] = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: ''},
    { path: 'user-management', title: 'Пользователи', icon: 'pe-7s-user', class: '', access: [ROLES.Admin] },
    // { path: 'product-management', title: 'Товары', icon: 'pe-7s-note2', class: '', access: [ROLES.Admin, ROLES.Provider] },
    // {path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: ''},
    // {path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: ''},
    // {path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: ''},
    // {path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: ''},
    // {path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: ''},
    // {path: 'upgrade', title: 'Upgrade to PRO', icon: 'pe-7s-rocket', class: 'active-pro'},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    public user: any;

    constructor(localstorageService: LocalStorageService) {
        // this.user = localstorageService.get('user');
        this.user = JSON.parse(localStorage.user);
    }

    ngOnInit() {
        console.log(this.user);
        this.menuItems = ROUTES.filter(menuItem => {
            return menuItem.access.indexOf(this.user.role_id) !== -1;
        });
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
