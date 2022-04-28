import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { authInitialState, authReducer } from './+state/auth.reducer';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LocalStorageJwtService } from './local-storage-jwt.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpInterceptorService } from "@nx-angular-ngrx-cms/common-services";
import { NgrxErrorModule } from "@nx-angular-ngrx-cms/ngrx-error";
import { NgrxFormsModule } from "@nx-angular-ngrx-cms/ngrx-forms";

const authRouting: ModuleWithProviders = RouterModule.forChild( [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
] );

@NgModule( {
  imports: [
    CommonModule,
    NgrxErrorModule,
    NgrxFormsModule,
    authRouting,
    StoreModule.forFeature( 'auth', authReducer, { initialState: authInitialState } ),
    EffectsModule.forFeature( [ AuthEffects ] )
  ],
  providers: [
    AuthEffects,
    AuthGuardService,
    AuthService,
    AuthFacade,
    LocalStorageJwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  declarations: [ LoginComponent, RegisterComponent ]
} )
export class AuthModule {
  static configure(env): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [ { provide: 'env', useValue: env } ]
    };
  }
}
