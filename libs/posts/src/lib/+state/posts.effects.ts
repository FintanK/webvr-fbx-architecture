import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PostsActionTypes } from './posts.actions';
import { PostsService } from "../services/posts.service";
import { catchError, map, mergeMap } from "rxjs/internal/operators";

@Injectable()
export class PostsEffects {

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType(PostsActionTypes.LoadPosts),
    mergeMap(action =>
      this.postsService.getAllPosts().pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: PostsActionTypes.PostsLoaded, payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: PostsActionTypes.PostsLoadError }))
      )
    ));

  constructor(
    private actions$: Actions,
    private postsService: PostsService,
  ) {}
}
