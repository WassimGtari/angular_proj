import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses = [];
  test_value = 'same';
  constructor(private courseservice: CourseService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.courses = this.courseservice.getCourse();
    }, 2000);
  }
  trackCourse(index, course) {
    return course ? course.title : undefined;
  }

  loadcourses() {
    this.courses = [
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
        rating: 9.9445,
        students: 24587,
        price: 195.95,
        releaseDate: new Date(2024, 2, 26),
      },
      {
        title: 'womkl',
        rating: 1.9445,
        students: 245287,
        price: 175.95,
        releaseDate: new Date(2014, 2, 26),
      },
    ];
  }
  AddCourse() {
    this.courses.push({
      title: 'ahmed',
      rating: 2.9445,
      students: 2421,
      price: 280.95,
      releaseDate: new Date(2024, 2, 27),
    });
  }
  remove(course) {
    let index = this.courses.indexOf(course);

    this.courses.splice(index, 1);
    //course.title = 'updated';
  }
}
