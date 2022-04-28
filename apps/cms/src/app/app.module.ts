import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ScenesModule } from '@nx-angular-ngrx-cms/scenes';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { environment } from "../environments/environment";
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { QuillConfig, QuillModule } from "ngx-quill";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Our NX Architecture: dependencies / libraries
  */

import { CommonUiModule } from "@nx-angular-ngrx-cms/common-ui";
import { CommonServicesModule, HttpInterceptorService } from "@nx-angular-ngrx-cms/common-services";
import { UsersModule } from "@nx-angular-ngrx-cms/users";
import { PostsModule } from "@nx-angular-ngrx-cms/posts";
import { AuthModule } from "@nx-angular-ngrx-cms/authentication";
import { NgrxRouterModule } from "@nx-angular-ngrx-cms/ngrx-router";
import { NgrxErrorModule } from "@nx-angular-ngrx-cms/ngrx-error";
import { MomentModule } from "ngx-moment";
import { WalletComponent } from './wallet/wallet.component';
import { ObjectsComponent } from './objects/objects.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '**', redirectTo: '/scenes' }
];

const quillConfig: QuillConfig = {
  modules: {
    syntax: true,
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ]
  }
};

@NgModule( {
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    WalletComponent, 
    ObjectsComponent, 
    BuyComponent, 
    LoginComponent, 
    CreateComponent ],
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
    ScenesModule,
    // Rich Text Editor module
    QuillModule.forRoot(quillConfig),
    // MomentJS Module
    MomentModule
  ],
  providers: [
    CommonServicesModule.forRoot().providers,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
} )
export class AppModule {
}
