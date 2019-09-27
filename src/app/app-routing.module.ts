import { ACCOUNT_ROUTES } from '@abp/ng.account';
import { ABP } from '@abp/ng.core';
import { IDENTITY_ROUTES } from '@abp/ng.identity';
import { TENANT_MANAGEMENT_ROUTES } from '@abp/ng.tenant-management';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASSETS_ROUTES } from '@ran-ng/assets';
import { BLOGGING_ADMIN_ROUTES } from '@ran-ng/blogging-admin/dev';
import { BLOGGING_MP_ROUTES } from '@ran-ng/mp/dev';
import { SITE_ROUTES } from '@ran-ng/site';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      routes: {
        name: '::Menu:Home',
      } as ABP.Route,
    },
  },
  {
    path: 'account',
    loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule),
    data: { routes: ACCOUNT_ROUTES },
  },
  {
    path: 'identity',
    loadChildren: () => import('./lazy-libs/identity-wrapper.module').then(m => m.IdentityWrapperModule),
    data: { routes: IDENTITY_ROUTES },
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('./lazy-libs/tenant-management-wrapper.module').then(m => m.TenantManagementWrapperModule),
    data: { routes: TENANT_MANAGEMENT_ROUTES },
  },
  {
    path: 'assets',
    loadChildren: () => import('./lazy-libs/assets-wrapper.module').then(m => m.AssetsWrapperModule),
    data: { routes: ASSETS_ROUTES },
  },
  {
    path: 'blogging-admin',
    loadChildren: () =>
      import('./lazy-libs/blogging-admin-wrapper.module').then(m => m.BloggingAdminWrapperModule),
    data: { routes: BLOGGING_ADMIN_ROUTES },
  },
  {
    path: 'mp',
    loadChildren: () =>
      import('./lazy-libs/mp-wrapper.module').then(m => m.MPWrapperModule),
    data: { routes: BLOGGING_MP_ROUTES },
  },
  {
    path: 'site',
    loadChildren: () =>
      import('./lazy-libs/site-wrapper.module').then(m => m.SiteWrapperModule),
    data: { routes: SITE_ROUTES },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

