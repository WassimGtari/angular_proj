import { TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
describe('CoursesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesComponent]
        });
        fixture = TestBed.createComponent(CoursesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=courses.component.spec.js.map