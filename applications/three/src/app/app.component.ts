import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'three';
  apiToken = 'd789c527aaca98d3bc5ade2110a95e8ae65a8a09';
  repos: Array<any>;
  searchQuery = 'angular';

  constructor(private http: HttpClient) {}

  getRepos() {
    return this.http.get(
      'https://api.github.com/search/repositories?q=' + this.searchQuery,
    );
  }

  ngOnInit() {
    this.getRepos().subscribe((data) => (this.repos = data['items']));
  }
}
