import { Component, inject, OnInit } from '@angular/core';
import { QuestService } from '../../services/questService';
import { CHARACTER, Character, Quest, QuestState } from '../../data/quests.data';
import { QuestCard } from '../../components/quest-card/quest-card';
import { Skills } from '../../components/skills/skills';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerBrandLinkedin, tablerBrandGithub } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-home',
  imports: [QuestCard, Skills, NgIcon],
    providers: [provideIcons({ tablerBrandLinkedin,  tablerBrandGithub})],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  questService = inject(QuestService)
  questList: Quest[] = []
  questCompletedList: Quest[] = []
  questProgressList: Quest[] = []
  questFailedList: Quest[] = []
  Hero: Character = CHARACTER

  ngOnInit() {
    this.questList = this.questService.getQuests()
    this.questCompletedList = this.questList.filter((quest) => quest.state === QuestState.COMPLETED)
    this.questProgressList = this.questList.filter((quest) => quest.state === QuestState.PROGRESS)
    this.questFailedList = this.questList.filter((quest) => quest.state === QuestState.FAILED)
  }
}
