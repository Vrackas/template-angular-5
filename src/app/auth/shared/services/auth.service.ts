import {Injectable} from '@angular/core';
import {RequestService} from '../../../shared/services/request.service';
import {ConstantHelperService} from '../../../shared/base/constant-helper.service';

@Injectable()
export class AuthService extends ConstantHelperService {
    service_name: string;

    constructor(private request: RequestService) {
        super();
        this.service_name = 'auth';
        console.log('Auth service is loaded');
    }

    signIn(credentials) {
        const url = this.url('login');
        return this.request.post(url, credentials);
    }
}
