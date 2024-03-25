import { AppErrorHandler } from './common/AppErrorHandler';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './course/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FollowersComponent } from './followers/followers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import * as i0 from "@angular/core";
import * as i1 from "@auth0/angular-jwt";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            CourseService,
            PostService,
            { provide: ErrorHandler, useClass: AppErrorHandler },
            AuthService,
        ], imports: [BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('token');
                    },
                },
            })] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    CoursesComponent,
                    CourseComponent,
                    SummaryPipe,
                    FavoriteComponent,
                    PanelComponent,
                    InputFormatDirective,
                    ContactFormComponent,
                    SignupFormComponent,
                    NewCourseFormComponent,
                    PostsComponent,
                    NavBarComponent,
                    FollowersComponent,
                    NotFoundComponent,
                    ProfilComponent,
                    HomeComponent,
                    LoginComponent,
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    JwtModule.forRoot({
                        config: {
                            tokenGetter: () => {
                                return localStorage.getItem('token');
                            },
                        },
                    }),
                ],
                providers: [
                    CourseService,
                    PostService,
                    { provide: ErrorHandler, useClass: AppErrorHandler },
                    AuthService,
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        CoursesComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        PanelComponent,
        InputFormatDirective,
        ContactFormComponent,
        SignupFormComponent,
        NewCourseFormComponent,
        PostsComponent,
        NavBarComponent,
        FollowersComponent,
        NotFoundComponent,
        ProfilComponent,
        HomeComponent,
        LoginComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, i1.JwtModule] }); })();
//# sourceMappingURL=app.module.js.map