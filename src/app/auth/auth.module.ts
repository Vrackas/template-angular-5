import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthService} from './shared/services/auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ],
    declarations: [
        AuthComponent,
        SignInComponent,
        SignUpComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {
    constructor() {
        console.log('Auth module is loaded');
    }
}
