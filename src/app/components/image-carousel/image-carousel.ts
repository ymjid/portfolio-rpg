import { Component, input, signal } from '@angular/core';
import { QuestImage } from '../../data/quests.data';

@Component({
  selector: 'app-image-carousel',
  imports: [],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.scss',
})
export class ImageCarousel {
    imageList = input.required<QuestImage[]>()
    currentIndex = signal(0)

    public prev() {
        let prev = this.currentIndex() - 1;
      if (prev < 0) {
        prev = this.imageList().length - 1;
      }
      this.currentIndex.set(prev);
    }

    public next() {
      let next = this.currentIndex() + 1;
      if (next > this.imageList().length - 1) {
        next = 0;
      }
      this.currentIndex.set(next);
    }
}
