import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScenesComponent } from './components/scenes/scenes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SCENES_FEATURE_KEY,
  initialState as scenesInitialState,
  scenesReducer
} from './+state/scenes.reducer';
import { ScenesEffects } from './+state/scenes.effects';
import { ScenesFacade } from './+state/scenes.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: 'scenes', pathMatch: 'full', component: ScenesComponent}
    ]),

    StoreModule.forFeature(SCENES_FEATURE_KEY, scenesReducer, {
      initialState: scenesInitialState
    }),

    EffectsModule.forFeature([ScenesEffects])
  ],
  declarations: [ScenesComponent],
  providers: [ScenesFacade],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ScenesModule {}
