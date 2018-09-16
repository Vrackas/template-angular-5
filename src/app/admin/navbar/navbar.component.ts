import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { DataTitleService } from "../../shared/providers/data-title.service";

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    private listTitles: any[];
    private toggleButton: any;
    private sidebarVisible: boolean;
    private routes: any[];
    title: string;

    constructor(
        private element: ElementRef,
        private router: Router,
        private data: DataTitleService) {

        this.sidebarVisible = false;
    }

    logout() {
        this.router.navigate(['auth/sign-in']);
    }

    ngOnInit() {
        this.data.currentTitle.subscribe(title => this.title = title);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }

    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }
}