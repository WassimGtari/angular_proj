import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError, map, firstValueFrom } from 'rxjs';
import { AppError } from '../common/AppError';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/badrequiest-error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(
      map((response) => JSON.parse(JSON.stringify(response))),
      catchError(this.handlererror)
    );
  }
  create(resource) {
    // return throwError(() => new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response) => JSON.parse(JSON.stringify(response))),
      catchError(this.handlererror)
    );
  }
  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map((response) => JSON.parse(JSON.stringify(response))),
        catchError(this.handlererror)
      );
  }
  async delete(id: number) {
    const url = `${this.url}/${id}`;
    console.log(url);
    return await firstValueFrom(
      this.http.delete(url).pipe(retry(3), catchError(this.handlererror))
    );
  }
  private handlererror(error: HttpErrorResponse) {
    if (error.status === 404) return throwError(() => new NotFoundError());
    if (error.status === 400)
      return throwError(() => new BadRequestError(JSON.stringify(error)));
    return throwError(() => new AppError(error));
  }
}
