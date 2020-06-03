import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetsModule } from '../fleet/fleet.module';


@NgModule({
    imports: [
        CommonModule,
        FleetsModule,
    ],
    declarations: [],
    providers: [
    ],
    exports: [
        FleetsModule
    ],
    entryComponents: []
})

export class SharedModule { }