import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  responseInfo: string;
  images: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }

  getJson() {
    this.http.get('assets/package.json')
    .subscribe((result: Response) => {
      console.log(result);
      return result;
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media')
    .subscribe((result: Response) => {
      console.log(result);
      this.images = result;
      return result;
    });
  }
}
