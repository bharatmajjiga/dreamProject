import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private url = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http : Http) { }

  getAlbums() {
    return this.http.get(this.url);
  }
}
