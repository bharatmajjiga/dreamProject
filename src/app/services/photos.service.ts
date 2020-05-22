import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private url = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http : Http) { }

  getPhotos() {
    return this.http.get(this.url);
  }

}
