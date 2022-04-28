import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostsFacade } from "@nx-angular-ngrx-cms/posts";
// import * as THREE from 'three';

@Component({
  selector: 'cms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  posts$ = this.postsFacade.allPosts$;

  constructor(private postsFacade: PostsFacade) {
    this.postsFacade.loadAll();
  }

}
