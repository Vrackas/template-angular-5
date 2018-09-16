import { Component, OnInit } from '@angular/core';
import { DataTitleService } from '../../shared/providers/data-title.service';

@Component({
    selector: 'app-admin-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {

    public tabsInfo: any[] = [
        // {
        //     title: 'Список пользователей',
        //     url: './user-list',
        // }
    ];

    public constructor(private data: DataTitleService) { }

    ngOnInit() {
        this.data.changeTitle('User Manager');
    }

}