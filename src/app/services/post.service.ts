import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/AppError';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/badrequiest-error';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends DataService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
