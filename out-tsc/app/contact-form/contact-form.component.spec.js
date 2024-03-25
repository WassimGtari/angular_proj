import { TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
describe('ContactFormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactFormComponent]
        });
        fixture = TestBed.createComponent(ContactFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-form.component.spec.js.map