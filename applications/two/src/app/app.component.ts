import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-two',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'two';
	apiKey = 'a4a82af99bab46ac9e703e103595eaf3';
	mArticles: Array<any>;
	mSources: Array<any>;

	constructor(private http: HttpClient) {}

	initSources() {
		return this.http.get(
			'https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey,
		);
	}
	initArticles() {
		return this.http.get(
			'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
				this.apiKey,
		);
	}
	getArticlesByID(source: String) {
		return this.http.get(
			'https://newsapi.org/v2/top-headlines?sources=' +
				source +
				'&apiKey=' +
				this.apiKey,
		);
	}

	ngOnInit() {
		//load articles
		this.initArticles().subscribe(
			(data) => (this.mArticles = data['articles']),
		);
		//load news sources
		this.initSources().subscribe((data) => (this.mSources = data['sources']));
	}

	searchArticles(source) {
		console.log('selected source is: ' + source);
		this.getArticlesByID(source).subscribe(
			(data) => (this.mArticles = data['articles']),
		);
	}
}
