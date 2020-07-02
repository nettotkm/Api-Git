import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      const url = `https://api.github.com/search/repositories?q=${this.searchText}`;

      this.http.get(url).subscribe((response) => {
        this.projects = response['items'];
      });
    }
  }
}
