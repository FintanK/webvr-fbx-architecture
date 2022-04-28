import { Component, Input, OnInit } from '@angular/core';
import { AuthFacade } from "@nx-angular-ngrx-cms/authentication";
import { Observable } from "rxjs/index";

@Component({
  selector: 'common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerText: string;

  isLoggedIn$: Observable<boolean>;

  constructor(private authFacade: AuthFacade) { }

  logout() {
    this.authFacade.logout();
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authFacade.isLoggedIn$;
  }

}
