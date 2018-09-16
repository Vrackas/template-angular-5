import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {EntityService} from '../../../shared/base/entity.service';

@Injectable()
export class UserListService extends EntityService {
    service_name: string;

    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'user-list';
    }

    get(id: number = null, data: Object = null) {
        let url = this.url('index');
        if (id != null) {
            url = this.url('one');
            url += '/' + id;
        }
        if (url) {
            return this.request.get(url, data);
        }
    }

}

