import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { Router } from "@angular/router";

@Component( {
  selector: 'nx-angular-ngrx-cms-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: [ './post-create.component.scss' ]
} )
export class PostCreateComponent implements OnInit {

  title: string;
  text: string;

  constructor(private postsService: PostsService, private router: Router) {

  }

  createPost() {
    this.postsService.createPost({
      title: this.title,
      text: this.text
    }).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['posts']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
