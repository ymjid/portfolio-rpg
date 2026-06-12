import { Component, effect, ElementRef, inject, OnDestroy, Renderer2, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestService } from '../../services/questService';
import { Quest, QuestState, Theme } from '../../data/quests.data';
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
export class QuestDetail implements OnDestroy{
  questService = inject(QuestService)
  activateRoute = inject(ActivatedRoute)
  private renderer = inject(Renderer2);
  private sanitizer = inject(DomSanitizer);
  safePreviewUrl: SafeResourceUrl | undefined;
  isPreviewOpen = signal(false)
  quest: Quest | undefined
  protected readonly QuestState = QuestState;
  @ViewChild('previewIframe') previewIframe!: ElementRef;
  styleEl: HTMLStyleElement | null = null;

  constructor() {
    effect(() => {
      if (this.questService.isLoaded()) {
    const id = this.activateRoute.snapshot.paramMap.get('id')

    if (id) {
      this.quest = this.questService.getQuest(id)
      if (this.quest?.theme) {
        const theme: Theme | undefined = this.getTheme(this.quest?.theme)
        if (theme) {
          this.styleEl = this.renderer.createElement('style')
        const themeStyle = `.${theme.name} {
          --portal-bg : ${theme.variables['--portal-bg']};
          --portal-border: ${theme.variables['--portal-border']};
          --portal-card: ${theme.variables['--portal-card']};
          --portal-primary: ${theme.variables['--portal-primary']};
          --portal-text: ${theme.variables['--portal-text']};
        }`
        this.renderer.setProperty(this.styleEl, 'textContent', themeStyle)
        this.renderer.appendChild(document.head, this.styleEl)
        this.renderer.addClass(document.body, this.quest.theme);
        }
      }
      if (this.quest?.preview) {
        this.safePreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.quest.preview)
      }
    }
  }
    })
  }

  getTheme(themeName: string) {
    return this.questService.themes().find(theme => themeName === theme.name)
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
      this.styleEl && this.styleEl.remove();
    }
  }
}
