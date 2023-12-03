import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioArtifactsComponent } from './audio-artifacts.component';

describe('AudioArtifactsComponent', () => {
  let component: AudioArtifactsComponent;
  let fixture: ComponentFixture<AudioArtifactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioArtifactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioArtifactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
