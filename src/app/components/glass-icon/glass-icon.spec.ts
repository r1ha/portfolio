import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassIcon } from './glass-icon';

describe('GlassIcon', () => {
  let component: GlassIcon;
  let fixture: ComponentFixture<GlassIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(GlassIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
