import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSet } from './icon-set';

describe('IconSet', () => {
  let component: IconSet;
  let fixture: ComponentFixture<IconSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSet],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
