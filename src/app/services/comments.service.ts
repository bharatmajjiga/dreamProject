import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = "https://jsonplaceholder.typicode.com/comments";
  constructor(private http: Http) { }

  getComments() {
    return this.http.get(this.url);
  }
}
