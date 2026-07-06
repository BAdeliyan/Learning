import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveReloadInfoComponent } from './live-reload-info.component';

describe('LiveReloadInfoComponent', () => {
  let component: LiveReloadInfoComponent;
  let fixture: ComponentFixture<LiveReloadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveReloadInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveReloadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
