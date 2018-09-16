import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestService} from './services/request.service';
import {HttpClientModule} from '@angular/common/http';
import {EntityService} from './base/entity.service';
import {ConstantHelperService} from './base/constant-helper.service';
import { DataTitleService } from './providers/data-title.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [RequestService, EntityService, ConstantHelperService, DataTitleService]
})
export class SharedModule {
}
