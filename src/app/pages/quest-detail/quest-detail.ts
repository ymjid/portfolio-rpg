import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestService } from '../../services/questService';
import { Quest, QuestState } from '../../data/quests.data';
import { GithubService } from '../../services/github';
import { ImageCarousel } from '../../components/image-carousel/image-carousel';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { tablerCheck, tablerSkull, tablerLock, tablerProgress, tablerPlayerPlay, tablerX, tablerBrandGithub } from '@ng-icons/tabler-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-quest-detail',
  imports: [ImageCarousel, RouterLink, NgClass, NgIcon],
  providers: [provideIcons({ tablerCheck, tablerSkull, tablerLock, tablerProgress, tablerPlayerPlay, tablerX, tablerBrandGithub})],
  templateUrl: './quest-detail.html',
  styleUrl: './quest-detail.scss',
})
export class QuestDetail implements OnInit, OnDestroy{
  questService = inject(QuestService)
  activateRoute = inject(ActivatedRoute)
  private renderer = inject(Renderer2);
  githubService = inject(GithubService);
  private sanitizer = inject(DomSanitizer);
  safePreviewUrl: SafeResourceUrl | undefined;
  isPreviewOpen = signal(false)
  quest: Quest | undefined
  protected readonly QuestState = QuestState;
  @ViewChild('previewIframe') previewIframe!: ElementRef;

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id')

    if (id) {
      this.quest = this.questService.getQuest(id)
      if (this.quest?.theme) {
        this.renderer.addClass(document.body, this.quest.theme);
      }
      if (this.quest?.preview) {
        this.safePreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.quest.preview)
      }
    }
  }

  public openPreview() {
    this.isPreviewOpen.set(!this.isPreviewOpen())
    setTimeout(() => {
        this.previewIframe.nativeElement.focus();
    }, 100);
  }

  public closePreview() {
    this.isPreviewOpen.set(!this.isPreviewOpen())
  }

  ngOnDestroy() {
    if (this.quest?.theme) {
      this.renderer.removeClass(document.body, this.quest.theme);
    }
  }
}
