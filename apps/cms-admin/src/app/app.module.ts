import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { CommonUiModule } from "@nx-angular-ngrx-cms/common-ui";
import { CommonServicesModule, HttpInterceptorService } from "@nx-angular-ngrx-cms/common-services";
import { PostsModule } from "@nx-angular-ngrx-cms/posts";
import { environment } from "..//environments/environment";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from "@angular/forms";
import { AuthModule } from "@nx-angular-ngrx-cms/authentication";
import { NgrxRouterModule } from "@nx-angular-ngrx-cms/ngrx-router";
import { NgrxErrorModule } from "@nx-angular-ngrx-cms/ngrx-error";
import { StoreModule } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { UsersModule } from "@nx-angular-ngrx-cms/users";
import { QuillConfig, QuillModule } from "ngx-quill";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: '**', redirectTo: '/' }
];

const quillConfig: QuillConfig = {
  modules: {
    syntax: true,
    toolbar: [
      [ 'bold', 'italic', 'underline', 'strike' ],        // toggled buttons
      [ 'code-block' ],
      [ { 'header': 1 }, { 'header': 2 } ],               // custom button values
      [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
      [ { 'indent': '-1' }, { 'indent': '+1' } ],          // outdent/indent
      [ { 'direction': 'rtl' } ],                         // text direction
      [ { 'size': [ 'small', false, 'large', 'huge' ] } ],  // custom dropdown
    ]
  }
};


@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent],
  imports: [
    // Angular core dependencies
    BrowserModule,
    CommonUiModule,
    FormsModule,
    RouterModule.forRoot( routes, { initialNavigation: 'enabled', useHash: true } ),
    // NX Module
    NxModule.forRoot(),
    // Our Authentication Module
    AuthModule.configure( environment ),
    // NgRx related Modules
    NgrxRouterModule,
    NgrxErrorModule,
    StoreModule.forRoot({}, { metaReducers: !environment.production ? [storeFreeze] : [] }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    // Our common services module
    CommonServicesModule.configure( environment ),
    // Our Feature Modules
    PostsModule.configure( environment ),
    UsersModule.configure( environment ),
    // Rich Text Editor module
    QuillModule.forRoot(quillConfig),
  ],
  providers: [
    CommonServicesModule.forRoot().providers,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
