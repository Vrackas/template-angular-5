import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {ModuleRouting} from './app-routing';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthenticationInterceptor} from './shared/services/authentication.interceptor';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AuthModule,
        FormsModule,
        RouterModule,
        SharedModule,
        ModuleRouting,
        AdminModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true,
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
