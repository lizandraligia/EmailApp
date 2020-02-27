import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module';

import { EmailListComponent } from './menu/email-list/email-list.component';
import { EmailComponent } from './menu/email-list/email/email.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmailListComponent,
    EmailComponent,
    FilterPipePipe
  ],
  imports: [
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
