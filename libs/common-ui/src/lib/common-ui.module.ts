import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonServicesModule } from "@nx-angular-ngrx-cms/common-services";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    CommonServicesModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
  ]
})
export class CommonUiModule {}
