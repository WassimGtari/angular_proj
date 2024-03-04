import { Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';

@Injectable()
export class CourseService {
  course = [
    {
      title: 'wassim',
      rating: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2024, 3, 1),
    },
    {
      title: 'ali12212',
      rating: 5.9445,
      students: 25602,
      price: 280.95,
      releaseDate: new Date(2024, 2, 23),
    },
    {
      title: 'med',
      rating: 4.56,
      students: 2546613,
      price: 195.95,
      releaseDate: new Date(2024, 2, 26),
    },
  ];
  getCourse() {
    return this.course;
  }
}
