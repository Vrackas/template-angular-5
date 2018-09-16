import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {EntityService} from '../../../shared/base/entity.service';

@Injectable()
export class ProviderListService extends EntityService {
    service_name: string;

    constructor(public request: RequestService) {
        super(request);
        this.service_name = 'provider-list';
    }

}

