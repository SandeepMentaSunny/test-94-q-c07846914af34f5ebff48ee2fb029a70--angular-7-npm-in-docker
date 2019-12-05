import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppRegExpressionsConfig } from './../../../providers/app.regularexpressions';
import { HttpService } from './../../../providers/http.service';

@Component({
  selector: 'app-video-compilation',
  templateUrl: './video-compilation.component.html',
  styleUrls: ['./video-compilation.component.scss', '../segment-video/segment-video.component.scss']
})
export class VideoCompilationComponent implements OnInit {
  public videoCompilationForm: FormGroup;
  public segments: FormArray;
  public loadingShimmer: boolean = false;
  public videoResponse: string = '';

  constructor(private builder: FormBuilder, private httpService: HttpService) {
    this.videoCompilationForm = builder.group({
      segments: builder.array([]),
      width: new FormControl(null, Validators.required),
      height: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

  createForm(){
    return this.builder.group({
      video_url: new FormControl(null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.url)])),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
    })
  }

  addItems(){
    this.segments = this.videoCompilationForm.get('segments') as FormArray;
    this.segments.push(this.createForm());
  }

  deleteRange(i){
    this.segments.removeAt(i);
    if(!this.segments.value.length){
      this.loadingShimmer = false;
    }
  }

  combineVideo(){
    this.loadingShimmer = true;
    let payload = this.videoCompilationForm.value || {};
    console.log(payload);
    this.httpService.combineVideo(payload).subscribe(data => {
      console.log(data);
      this.loadingShimmer = false;
      this.videoResponse = data && data[`video_url`] || '';
    })
  }
}
