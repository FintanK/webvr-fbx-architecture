import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PostsPartialState } from './posts.reducer';
import { postsQuery } from './posts.selectors';
import { LoadPosts } from './posts.actions';

@Injectable()
export class PostsFacade {
  loaded$ = this.store.pipe(select(postsQuery.getLoaded));
  allPosts$ = this.store.pipe(select(postsQuery.getAllPosts));
  selectedPosts$ = this.store.pipe(select(postsQuery.getSelectedPosts));

  constructor(private store: Store<PostsPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadPosts());
  }
}
