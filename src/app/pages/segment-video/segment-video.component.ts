import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppLiteralsConfig } from './../../../providers/app.literals';
import { AppRegExpressionsConfig } from './../../../providers/app.regularexpressions';
import { HttpService } from './../../../providers/http.service';

@Component({
  selector: 'app-segment-video',
  templateUrl: './segment-video.component.html',
  styleUrls: ['./segment-video.component.scss', '../video-compilation/video-compilation.component.scss']
})
export class SegmentVideoComponent implements OnInit {
  public segmentVideoFormGroup: FormGroup;
  public AppLiteralsConfig: any = AppLiteralsConfig;
  public settings: object[] = [{
    type: 'interval',
    val: 'Interval duration'
  },
  {
    type: 'range',
    val: 'Range duration'
  },
  {
    type: 'segments',
    val: 'Number of segments'
  }];
  public interval_range: FormArray;
  public loadingShimmer: boolean = false;
  public generatedVideoUrls: object[] = [];

  constructor(private builder: FormBuilder, private httpService: HttpService) {
    this.segmentVideoFormGroup = builder.group({
      video_link: new FormControl(null, [Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.url)])]),
      segmentSettings: new FormControl(null, Validators.required),
      interval_duration: new FormControl(null, Validators.required),
      interval_range: this.builder.array([this.createRange()]),
      no_of_segemnts: new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

  createRange() {
    return this.builder.group({
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
    });
  }

  addRange() {
    this.interval_range = this.segmentVideoFormGroup.get('interval_range') as FormArray;
    this.interval_range.push(this.createRange());
  }

  deleteRange(i) {
    this.interval_range.removeAt(i);
  }

  segmentVideo() {
    this.loadingShimmer = true;
    const segmentSettings = this.segmentVideoFormGroup.get('segmentSettings').value || '';
    let payload = {...this.segmentVideoFormGroup.value} || {};
    payload = this.httpService.filterPayload(segmentSettings, payload);
    console.log(payload);
    this.httpService.generateVideo(segmentSettings, payload).subscribe(data => {
      console.log(data);
      this.loadingShimmer = false;
      this.generatedVideoUrls = data && data[`interval_videos`] || [];
    });
  }
}
