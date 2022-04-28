import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HttpInterceptorService } from "./http-interceptor/http-interceptor.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
    HttpInterceptorService
  ]
})
export class CommonServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonServicesModule,
      providers: [ HttpInterceptorService ]
    };
  }
  static configure(env): ModuleWithProviders {
    return {
      ngModule: CommonServicesModule,
      providers: [{ provide: 'env', useValue: env }]
    };
  }
}
