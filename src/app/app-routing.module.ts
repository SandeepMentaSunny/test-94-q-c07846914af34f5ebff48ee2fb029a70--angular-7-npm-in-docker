import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'segment-video', pathMatch: 'full' },
  { path: 'segment-video', loadChildren: './pages/segment-video/segment-video.module#SegmentVideoModule'},
  { path:  'video-compilation', loadChildren: './pages/video-compilation/video-compilation.module#VideoCompilationModule'},
  { path: '**', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }