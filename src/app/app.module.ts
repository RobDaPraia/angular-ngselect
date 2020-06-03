import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FleetComponent } from './fleet/fleet.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FleetComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule,
    NgOptionHighlightModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
