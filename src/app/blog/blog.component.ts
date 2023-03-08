import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  template: ` <markdown [data]="markdownContent"></markdown>`,
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  markdownContent: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const markdownPath = this.route.snapshot.data['markdownPath'];
    const url = `${markdownPath}/${id}`;

    this.http
      .get(url, { responseType: 'text' })
      .subscribe((data) => (this.markdownContent = data));
  }
}
