import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule)
  },
  {
    path: 'identity',
    loadChildren: () => import('./lazy-libs/identity-wrapper.module').then(m => m.IdentityWrapperModule)
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('./lazy-libs/tenant-management-wrapper.module').then(m => m.TenantManagementWrapperModule)
  },
  {
    path: 'assets',
    loadChildren: () => import('./lazy-libs/assets-wrapper.module').then(m => m.AssetsWrapperModule)
  },
  {
    path: 'blogging-admin',
    loadChildren: () =>
      import('./lazy-libs/blogging-admin-wrapper.module').then(m => m.BloggingAdminWrapperModule)
  },
  {
    path: 'mp',
    loadChildren: () =>
      import('./lazy-libs/mp-wrapper.module').then(m => m.MPWrapperModule)
  },
  {
    path: 'site',
    loadChildren: () =>
      import('./lazy-libs/site-wrapper.module').then(m => m.SiteWrapperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

