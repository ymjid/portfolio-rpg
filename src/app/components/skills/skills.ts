import { Component } from '@angular/core';
import { SKILLS } from '../../data/quests.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = SKILLS
}
