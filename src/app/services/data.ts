import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character, Gear, Quest, Skill, Theme } from '../data/quests.data';

export interface PortfolioData {
    character: Character,
    skills: Skill[],
    gear: Gear[],
    quests: Quest[],
    tags: string[],
    themes: Theme[]
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  http = inject(HttpClient)

  getData() {
    return this.http.get<PortfolioData>("https://raw.githubusercontent.com/ymjid/portfolio-rpg-data/main/data.json")
  }
}
