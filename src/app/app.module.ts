import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { RAN_LAYOUTS } from '@ran-ng/theme-basic';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ThemeSharedModule.forRoot(),
    CoreModule.forRoot({
      environment,
      requirements: {
        layouts: RAN_LAYOUTS,
      },
    }),
    OAuthModule.forRoot(),
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
