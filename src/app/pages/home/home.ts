import { Component, effect, inject } from '@angular/core';
import { QuestService } from '../../services/questService';
import { Character, Quest, QuestState } from '../../data/quests.data';
import { QuestCard } from '../../components/quest-card/quest-card';
import { Skills } from '../../components/skills/skills';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerBrandLinkedin, tablerBrandGithub } from '@ng-icons/tabler-icons';
import { GearInventory } from '../../components/gear-inventory/gear-inventory';

@Component({
  selector: 'app-home',
  imports: [QuestCard, Skills, NgIcon, GearInventory],
    providers: [provideIcons({ tablerBrandLinkedin,  tablerBrandGithub})],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  questService = inject(QuestService)
  questList: Quest[] = []
  questCompletedList: Quest[] = []
  questProgressList: Quest[] = []
  questFailedList: Quest[] = []
  Hero: Character | null = null

  constructor() {
    effect(() => {
      if (this.questService.isLoaded()) {
        this.questList = this.questService.getQuests()
        this.questCompletedList = this.questList.filter((quest) => quest.state.text === QuestState.COMPLETED.text)
        this.questProgressList = this.questList.filter((quest) => quest.state.text === QuestState.PROGRESS.text)
        this.questFailedList = this.questList.filter((quest) => quest.state.text === QuestState.FAILED.text)
        this.Hero = this.questService.character()
      }
    })
  }
}
