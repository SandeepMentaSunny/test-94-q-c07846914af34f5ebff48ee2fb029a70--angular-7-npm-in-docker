import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';

import { VideoCompilationComponent } from './video-compilation.component';

const routes: Routes = [
    { path:'', component: VideoCompilationComponent }
]

@NgModule({
    declarations: [
        VideoCompilationComponent,
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

export class VideoCompilationModule {}