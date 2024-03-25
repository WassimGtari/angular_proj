import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
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
export class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=app-routing.module.js.map