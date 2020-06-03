import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { FleetsModule } from './fleet/fleet.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule,

    CoreModule,
    SharedModule,

    //FleetsModule,
  ],
  declarations: [
    AppComponent,
    DemoComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
