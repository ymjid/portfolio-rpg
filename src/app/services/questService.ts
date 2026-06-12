import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Character, Gear, Quest, Skill, Theme } from '../data/quests.data';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  data = inject(Data)
  quests: WritableSignal<Quest[]> = signal([])
  character: WritableSignal<Character | null> = signal<Character | null>(null)
  gears: WritableSignal<Gear[]> = signal([])
  skills: WritableSignal<Skill[]> = signal([])
  themes: WritableSignal<Theme[]> = signal([])
  isLoaded: WritableSignal<boolean> = signal(false)

  constructor() {
    this.data.getData().subscribe(data => {
      console.log(data)
      this.quests.set(data.quests);
      this.character.set(data.character)
      this.gears.set(data.gear)
      this.skills.set(data.skills)
      this.themes.set(data.themes)
      this.isLoaded.set(true);

    })
  }

  public getQuests(): Quest[] {
    return this.quests()
  }

  public getQuest(id: string): Quest | undefined {
    return this.quests().find((quest) => {
      return quest.id === id  
    })
  }
}
