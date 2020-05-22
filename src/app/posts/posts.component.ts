import { CommentsService } from './../services/comments.service';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  comments: any[];

  constructor(private service : PostsService, private service2 :CommentsService) { }

  ngOnInit() {

    this.service2.getComments()
      .subscribe(
        response => {
        this.comments = response.json().slice(0,5);
        }, 
        (error: Response) => {
          if(error.status === 404)
            alert("comment not found");
          else
            alert("unexpected error");
          console.log(error);
      });

    this.service.getPosts()
      .subscribe(
        response => {
        this.posts = response.json().slice(0,12);
        },
        (error: Response) => {
          if(error.status === 404)
            alert("post not found");
          else
            alert('unexpected error');
          console.log(error);
        });
  
        //write delete logic and add delete button in ui
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value,
      body: 'test body',
      userId: 1
    }
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0,0,post);
      },
      (error : Response) => {
        if(error.status === 400)
          alert("unable to create post");
        else
          alert("unexpected error");
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      },
      (error : Response) => {
      if(error.status === 404)
        alert("unable to update post");
      else
        alert('unexpected error');
      });
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response =>  {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if(error.status === 404)
          alert('unable to delete post');
        else
          alert('unexpected error');
      });
  }

}
