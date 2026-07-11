import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCard } from './personal-card';

describe('PersonalCard', () => {
  let component: PersonalCard;
  let fixture: ComponentFixture<PersonalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
