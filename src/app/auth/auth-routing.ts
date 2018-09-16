import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const AUTH_ROUTING: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            }

        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AUTH_ROUTING)
    ],
    declarations: [],
    exports: [RouterModule]
})


export class AuthRoutingModule {
    constructor() {
        console.log('auth routing is loaded');
    }
}
