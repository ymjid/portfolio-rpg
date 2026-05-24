import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GithubReadme, GithubUsername } from '../data/quests.data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  httpClient = inject(HttpClient)

  public getReadme(repo: string): Observable<GithubReadme> {
    return this.httpClient.get<GithubReadme>(`https://api.github.com/repos/${GithubUsername}/${repo}/readme`);
  }
}
