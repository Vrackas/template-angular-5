import {environment} from '../../../environments/environment';

const api = environment.apiHost;


export const APP_URL = {
    auth: {
        login: api + 'login',
        logout: api + 'logout'
    },
    'user-list': {
        index: api + 'users/all',
        one: api + 'user',
        update: api + 'user'
    },
    'product-list': {
        index: api + 'product',
        create: api + 'product',
        update: api + 'product',
        delete: api + 'product'
    },
    'category-list': {
        index: api + 'category',
        fields: api + 'category/get-fields'
    },
    'provider-list': {
        index: api + 'provider',
        create: api + 'provider',
        update: api + 'provider',
        delete: api + 'provider'
    }

};
