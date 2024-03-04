import { Component, OnInit } from '@angular/core';
import { FollwersService } from '../services/follwers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent implements OnInit {
  followers: any[];
  actualpage;
  constructor(
    private route: ActivatedRoute,
    private service: FollwersService
  ) {}
  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          return this.service.getAll();
        })
      )
      .subscribe((followers) => (this.followers = followers));
  }
}
