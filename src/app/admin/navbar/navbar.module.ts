import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, PaginationModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [NavbarComponent],
    bootstrap: [],
    providers: [],
    exports: [NavbarComponent]
})
export class NavbareModule {
}
