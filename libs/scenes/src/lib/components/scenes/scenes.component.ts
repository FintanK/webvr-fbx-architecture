import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';

@Component( {
  selector: 'nx-angular-ngrx-cms-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: [ './scenes.component.scss' ]
} )
export class ScenesComponent {

  activeDesign = '2';

  setActiveDesign(num) {
    document.getElementById('design').removeAttribute('gltf-model');
    document.getElementById('design').setAttribute('gltf-model', '#house' + num);
    this.activeDesign = num;
  }

}
