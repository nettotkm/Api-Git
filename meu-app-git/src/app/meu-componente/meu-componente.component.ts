import { ProjectsService } from './../services/projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css'],
})
export class MeuComponenteComponent implements OnInit, OnDestroy {
  searchText = '';
  projects = [];
  isAlive = true;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.projects
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  getProjects() {
    this.projectsService.getProjects(this.searchText);
  }
}
