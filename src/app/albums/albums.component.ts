import { PhotosService } from './../services/photos.service';
import { AlbumsService } from './../services/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any[];
  photos: any[];

  constructor(private service: AlbumsService,private service2: PhotosService) { }

  ngOnInit() { 

    this.service.getAlbums()
      .subscribe(response => {
        this.albums = response.json().slice(0,11);
    });

    this.service2.getPhotos()
      .subscribe(response => {
        this.photos = response.json().slice(0,1);
    });

  }

}
