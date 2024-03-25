import { TestBed } from '@angular/core/testing';
import { ProfilComponent } from './profil.component';
describe('ProfilComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfilComponent]
        });
        fixture = TestBed.createComponent(ProfilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profil.component.spec.js.map