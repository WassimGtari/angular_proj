import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { IsAuthoGuard } from './services/aut-guard.service';
import { IsGuardAdmin } from './services/aut-guard-admin.service';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'followers/:id/:username', component: ProfilComponent },
  {
    path: 'favorite',
    component: FavoriteComponent,
    canActivate: [IsAuthoGuard],
  },
  {
    path: 'followers',
    component: FollowersComponent,
    canActivate: [IsAuthoGuard],
  },
  { path: 'posts', component: PostsComponent, canActivate: [IsAuthoGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: CoursesComponent,
    canActivate: [IsAuthoGuard, IsGuardAdmin],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
