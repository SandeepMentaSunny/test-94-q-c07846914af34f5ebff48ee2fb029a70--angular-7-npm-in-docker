import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCompilationComponent } from './video-compilation.component';

describe('VideoCompilationComponent', () => {
  let component: VideoCompilationComponent;
  let fixture: ComponentFixture<VideoCompilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCompilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCompilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
