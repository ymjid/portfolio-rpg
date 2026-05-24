import { Component, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestService } from '../../services/questService';
import { Quest } from '../../data/quests.data';
import { GithubService } from '../../services/github';
import { ImageCarousel } from '../../components/image-carousel/image-carousel';

@Component({
  selector: 'app-quest-detail',
  imports: [ImageCarousel],
  templateUrl: './quest-detail.html',
  styleUrl: './quest-detail.scss',
})
export class QuestDetail implements OnInit, OnDestroy{
  questService = inject(QuestService)
  activateRoute = inject(ActivatedRoute)
  private renderer = inject(Renderer2);
  githubService = inject(GithubService);
  quest: Quest | undefined

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id')

    if (id) {
      this.quest = this.questService.getQuest(id)
      if (this.quest?.theme) {
        this.renderer.addClass(document.body, this.quest.theme);
      }
    }
  }

  ngOnDestroy() {
    if (this.quest?.theme) {
      this.renderer.removeClass(document.body, this.quest.theme);
    }
  }
}
