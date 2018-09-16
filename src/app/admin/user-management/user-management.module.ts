import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListService } from './shared/user-list.service';
import { NgxSelectModule } from 'ngx-select-ex';


@NgModule({
    imports: [
        NgxSelectModule,
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        UserManagementComponent
    ],
    bootstrap: [],
    providers: []
})
export class UserManagementModule {
}
