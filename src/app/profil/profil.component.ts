import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'test' },
    });
  }
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
     // const user = params.get('username');
      console.log(id);
    });
  }
}
