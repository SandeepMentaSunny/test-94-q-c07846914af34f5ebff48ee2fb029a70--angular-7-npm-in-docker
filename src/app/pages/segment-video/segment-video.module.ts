import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';

import { SegmentVideoComponent } from './segment-video.component';

const routes: Routes = [
    { path:'', component: SegmentVideoComponent }
]

@NgModule({
    declarations: [
        SegmentVideoComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
    ],
    providers: []
})

export class SegmentVideoModule {}