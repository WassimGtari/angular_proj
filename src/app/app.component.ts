import { Component } from '@angular/core';
import { datafavorite } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'wass',
    isfavrite: false,
  };

  value = 'wassim';
  Onkeyup() {
    console.log(this.value);
  }
  ondivClick(event: datafavorite) {
    console.log('favorite change : ' + event.newvalue);
  } /* eslint-disable @typescript-eslint/no-explicit-any */
  Show($event: any) {
    $event.stopPropagation();
    console.log('test log', $event);
    this.isactive = !this.isactive;
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
  title = 'angular_project';
  isactive = false;
  urlimage = 'https://imgupscaler.com/images/samples/animal-after.webp';
  colspan = 2;
  task = {
    titre: 'wassim',
    assignee: {
      name: null,
    },
  };
  getTitre(): string {
    return this.title;
  }
}
