import { CommentsService } from './services/comments.service';
import { PhotosService } from './services/photos.service';
import { AlbumsService } from './services/albums.service';
import { PostsService } from './services/posts.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PostsService,
    AlbumsService,
    PhotosService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
