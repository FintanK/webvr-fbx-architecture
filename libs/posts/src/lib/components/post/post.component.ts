import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'nx-angular-ngrx-cms-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.route.snapshot);
  }

  deletePost() {
    this.postsService.deletePostById(this.route.snapshot.params.postId).subscribe(
      (response) => {
        this.router.navigate(['posts']);
      },
      (error) => {
        console.log(error);
      },
    )
  }

  ngOnInit() {
    this.postsService.getPostById(this.route.snapshot.params.postId).subscribe(
      (response) => {
        this.post = response;
      },
      (error) => {

      },
    )
  }

}
