import { Component, input, OnInit, signal } from '@angular/core';
import { Quest, QuestState } from '../../data/quests.data';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerCheck, tablerSkull, tablerLock, tablerProgress } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-quest-card',
  imports: [RouterLink, NgClass, NgIcon],
  providers: [provideIcons({ tablerCheck, tablerSkull, tablerLock, tablerProgress})],
  templateUrl: './quest-card.html',
  styleUrl: './quest-card.scss',
})
export class QuestCard {
  quest = input.required<Quest>();
  isOpen = signal(false)
  protected readonly QuestState = QuestState;

  toggle() {
    this.isOpen.set(!this.isOpen())
  }

}
