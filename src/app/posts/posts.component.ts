import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/AppError';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/badrequiest-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private http: HttpClient, private service: PostService) {}
  ngOnInit(): void {
    this.service
      .getAll()

      .subscribe({
        next: (response) => {
          this.posts = response;
          console.log(response);
        },
        error: (error: AppError) => {
          throw error;
        },
      });
  }

  addpost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';
    this.service.create(post).subscribe({
      next: (newpost) => {
        post['id'] = newpost.id;
        console.log(newpost);
      },
      error: (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError) {
          alert('This post not created.');
        } else {
          throw error;
        }
      },
    });
  }
  deletePost(post) {
    this.service.delete(post.id);
  }
  updatepost(post) {
    this.service
      .update(post)

      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error: AppError) => {
          if (error instanceof BadRequestError) {
            alert('This post not created.');
          } else {
            throw error;
          }
        },
      });
  }
}
