import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostsService } from './services/posts.service';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { QuillModule } from 'ngx-quill';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  POSTS_FEATURE_KEY,
  initialState as postsInitialState,
  postsReducer
} from './+state/posts.reducer';
import { PostsEffects } from './+state/posts.effects';
import { PostsFacade } from './+state/posts.facade';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "@nx-angular-ngrx-cms/common-services";
import { AuthGuardService } from "@nx-angular-ngrx-cms/authentication";

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    // canActivate: ['AuthGuardService']
  },
  {
    path: 'post',
    component: PostCreateComponent
  },
  {
    path: 'post/:postId',
    component: PostComponent
  },
  {
    path: 'post/:postId/edit',
    component: PostEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    QuillModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POSTS_FEATURE_KEY, postsReducer, {
      initialState: postsInitialState
    }),
    EffectsModule.forFeature([PostsEffects])
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostCreateComponent,
    PostEditComponent
  ],
  providers: [
    {
      provide: 'AuthGuardService',
      useValue: () => {
        return true;
      }
    },
    PostsService,
    PostsFacade,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class PostsModule {
  static configure(env): ModuleWithProviders {
    return {
      ngModule: PostsModule,
      providers: [{ provide: 'env', useValue: env }]
    };
  }
}
