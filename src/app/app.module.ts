import { AccountConfigModule } from '@abp/ng.account.config';
import { CoreModule } from '@abp/ng.core';
import { IdentityConfigModule } from '@abp/ng.identity.config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management.config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management.config';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AssetsConfigModule } from '@ran-ng/assets-config';
import { BloggingAdminFieldProviderModule } from '@ran-ng/blogging-admin';
import { BloggingAdminConfigModule } from '@ran-ng/blogging-admin-config';
import { CoreModule as RanCoreModule } from '@ran-ng/core';
import { MpConfigModule } from '@ran-ng/mp-config';
import { SiteModule } from '@ran-ng/site';
import { SiteConfigModule } from '@ran-ng/site-config';
import { RAN_LAYOUTS } from '@ran-ng/theme-basic';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: true })];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ThemeBasicModule.forRoot({ theme: 'light' }),

    RanCoreModule.forRoot(),
    SiteModule.forRoot(),
    BloggingAdminFieldProviderModule,
    ThemeSharedModule.forRoot(),
    CoreModule.forRoot({
      environment,
      requirements: {
        layouts: RAN_LAYOUTS
      },
    }),

    OAuthModule.forRoot(),
    NgxsModule.forRoot([]),
    AccountConfigModule.forRoot({ redirectUrl: '/' }),
    IdentityConfigModule,
    TenantManagementConfigModule,
    SettingManagementConfigModule,
    AssetsConfigModule,
    SiteConfigModule,
    BloggingAdminConfigModule,
    MpConfigModule,
    ...(environment.production ? [] : LOGGERS),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
