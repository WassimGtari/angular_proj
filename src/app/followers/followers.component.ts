import { Component, OnInit } from '@angular/core';
import { FollwersService } from '../services/follwers.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { combineLatest } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent implements OnInit {
  _followers: [];
  actualpage;
  constructor(
    private route: ActivatedRoute,
    private service: FollwersService,
    public authService: AuthService
  ) {}
  /* eslint-disable @typescript-eslint/no-unused-vars */
  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          const id: string = combined[0].get('id');
          const page: string = combined[1].get('page');
          return this.service.getAll();
        })
      )
      .subscribe((followers) => (this._followers = followers));
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
