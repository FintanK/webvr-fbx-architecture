import { Component } from '@angular/core';
import { PostsFacade } from "../../+state/posts.facade";

@Component({
  selector: 'nx-angular-ngrx-cms-posts-root',
  template: `
    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            Latest Posts
          </h3>

          <div class="blog-post" *ngFor="let post of (posts$ | async)">
            <h2 class="blog-post-title" routerLink="/post/{{post._id}}">{{post.title}}</h2>
            <p class="blog-post-meta">{{post.createdAt | amTimeAgo}} by <a href="#" routerLink="users/{{post.author._id}}">{{post.author.username}}</a> | Liked {{post.favoriteCount}} times</p>
            <div [innerHTML]="post.text"></div>
            <a class="btn btn-outline-primary" href="#" routerLink="/post/{{post._id}}">View Post</a>
            <hr>
          </div><!-- /.blog-post -->

          <nav class="blog-pagination" *ngIf="(posts$ | async) && (posts$ | async).length > 5">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
          </nav>

        </div><!-- /.blog-main -->

        <aside class="col-md-4 blog-sidebar">
          <div class="p-3 mb-3 bg-light rounded">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </aside><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </main>
  `,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$ = this.postsFacade.allPosts$;

  constructor(
    private postsFacade: PostsFacade
  ) {
    this.postsFacade.loadAll();
  }

}
