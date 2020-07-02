import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

interface GithubRes {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  projects = new BehaviorSubject<any[]>([]);
  getProjects(searchText) {
    if (searchText) {
      const url = `https://api.github.com/search/repositories`;

      const params = new HttpParams().set('q', searchText);
      const headers = new HttpHeaders().set('Content-Type', 'Text/html');

      this.http
        .get<GithubRes>(url, { params, headers })
        .subscribe((response) => {
          this.projects.next(response.items);
        });
    }
  }
}
