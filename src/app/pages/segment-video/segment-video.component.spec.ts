import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentVideoComponent } from './segment-video.component';

describe('SegmentVideoComponent', () => {
  let component: SegmentVideoComponent;
  let fixture: ComponentFixture<SegmentVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
