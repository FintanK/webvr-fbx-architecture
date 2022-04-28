import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component( {
  selector: 'nx-angular-ngrx-cms-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: [ './post-edit.component.scss' ]
} )
export class PostEditComponent implements OnInit {

  post: any;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute) {
    console.log( this.route.snapshot );
  }

  ngOnInit() {
    this.postsService.getPostById( this.route.snapshot.params.postId ).subscribe(
      (response) => {
        this.post = response;
      },
      (error) => {

      },
    )
  }

  updatePost() {
    this.postsService.updatePost(this.post._id, {
      title: this.post.title,
      text: this.post.text
    }).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate([`/post/${this.post._id}`]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
