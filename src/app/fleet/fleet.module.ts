import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from '../app-routing.module';

import { FleetComponent } from './fleet.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  declarations: [
    FleetComponent,
  ],
  providers: [
  ],
  exports: [
    FleetComponent,
  ],
  entryComponents: []
})

export class FleetsModule { }