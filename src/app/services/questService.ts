import { Injectable } from '@angular/core';
import { Quest, QUESTS } from '../data/quests.data';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  public getQuests(): Quest[] {
    return QUESTS
  }

  public getQuest(id: string): Quest | undefined {
    return QUESTS.find((quest) => {
      return quest.id === id  
    })
  }
}
