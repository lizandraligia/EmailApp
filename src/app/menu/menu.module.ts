import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MenuModule { }
