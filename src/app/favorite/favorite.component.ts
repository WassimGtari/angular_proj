import { environment } from './../../environments/environment.test';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent {
  @Input() isselected: boolean;

  color = environment.navbarcolor;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() change = new EventEmitter();

  Onclick() {
    this.isselected = !this.isselected;
    this.change.emit({ newvalue: this.isselected });
  }
}
export interface datafavorite {
  newvalue: boolean;
}
