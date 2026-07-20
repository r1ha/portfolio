import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassCard } from './glass-card';

describe('GlassCard', () => {
  let component: GlassCard;
  let fixture: ComponentFixture<GlassCard>;

  function createPointerEvent(
    type: string,
    init: { clientX?: number; clientY?: number; button?: number } = {},
  ): MouseEvent {
    return new MouseEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX: init.clientX ?? 0,
      clientY: init.clientY ?? 0,
      button: init.button ?? 0,
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GlassCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update its position while dragging', () => {
    const card = fixture.nativeElement.querySelector('.card') as HTMLElement;

    card.dispatchEvent(createPointerEvent('pointerdown', { clientX: 12, clientY: 20 }));
    window.dispatchEvent(createPointerEvent('pointermove', { clientX: 42, clientY: 55 }));
    fixture.detectChanges();

    expect(card.style.transform).toBe('translate3d(30px, 35px, 0)');
    expect(card.getAttribute('aria-grabbed')).toBe('true');

    window.dispatchEvent(createPointerEvent('pointerup'));
    fixture.detectChanges();

    expect(card.getAttribute('aria-grabbed')).toBe('false');
  });
});
