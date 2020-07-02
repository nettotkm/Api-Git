import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

interface GithubRes {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
}

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css'],
})
export class MeuComponenteComponent implements OnInit {
  searchText = '';
  projects = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getProjects() {
    if (this.searchText) {
      const url = `https://api.github.com/search/repositories`;

      const params = new HttpParams().set('q', this.searchText);
      const headers = new HttpHeaders().set('Content-Type', 'Text/html');

      this.http
        .get<GithubRes>(url, { params, headers })
        .subscribe((response) => {
          this.projects = response.items;
        });
    }
  }
}
