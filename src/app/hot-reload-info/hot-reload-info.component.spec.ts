import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotReloadInfoComponent } from './hot-reload-info.component';

describe('HotReloadInfoComponent', () => {
  let component: HotReloadInfoComponent;
  let fixture: ComponentFixture<HotReloadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotReloadInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotReloadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
