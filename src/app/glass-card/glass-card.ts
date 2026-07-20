import { Component, computed, signal } from '@angular/core';

type Point = {
  x: number;
  y: number;
};

@Component({
  selector: 'app-glass-card',
  imports: [],
  templateUrl: './glass-card.html',
  styleUrl: './glass-card.css',
})
export class GlassCard {
  protected readonly dragging = signal(false);
  protected readonly position = signal<Point>({ x: 0, y: 0 });
  protected readonly dragStartPoint = signal<Point | null>(null);
  protected readonly dragStartPosition = signal<Point>({ x: 0, y: 0 });

  protected readonly transform = computed(() => {
    const { x, y } = this.position();

    return `translate3d(${x}px, ${y}px, 0)`;
  });

  protected startDrag(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    this.dragStartPoint.set({ x: event.clientX, y: event.clientY });
    this.dragStartPosition.set(this.position());
    this.dragging.set(true);
  }

  protected moveDrag(event: PointerEvent): void {
    if (!this.dragging()) {
      return;
    }

    const dragStartPoint = this.dragStartPoint();

    if (!dragStartPoint) {
      return;
    }

    const dragStartPosition = this.dragStartPosition();

    this.position.set({
      x: dragStartPosition.x + (event.clientX - dragStartPoint.x),
      y: dragStartPosition.y + (event.clientY - dragStartPoint.y),
    });
  }

  protected endDrag(): void {
    if (!this.dragging()) {
      return;
    }

    this.dragging.set(false);
    this.dragStartPoint.set(null);
  }
}
