import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user/:usertId',
    component: UserComponent
  }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ UsersComponent, UserComponent ]
} )
export class UsersModule {
  static configure(env): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [ { provide: 'env', useValue: env } ]
    };
  }
}
