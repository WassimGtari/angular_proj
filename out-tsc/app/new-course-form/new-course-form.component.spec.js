import { TestBed } from '@angular/core/testing';
import { NewCourseFormComponent } from './new-course-form.component';
describe('NewCourseFormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NewCourseFormComponent]
        });
        fixture = TestBed.createComponent(NewCourseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-course-form.component.spec.js.map