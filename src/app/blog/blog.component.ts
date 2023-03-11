import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  template: ` <markdown [data]="markdownContent"></markdown>`,
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  private id: string | null;
  private markdownPath: string;
  private cleanMetadata = (data: string) => data.split('---')[2];

  markdownContent: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.markdownPath = this.route.snapshot.data['markdownPath'];
  }

  ngOnInit() {
    const url = `${this.markdownPath}/${this.id}`;

    this.http
      .get(url, { responseType: 'text' })
      .subscribe(
        (data: string) => (this.markdownContent = this.cleanMetadata(data))
      );
  }
}
