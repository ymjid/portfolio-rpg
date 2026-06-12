import { Component, inject } from '@angular/core';
import { QuestService } from '../../services/questService';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})

export class Skills {
  questService = inject(QuestService)
}
