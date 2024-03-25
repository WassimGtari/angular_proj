import { TestBed } from '@angular/core/testing';
import { FollowersComponent } from './followers.component';
describe('FollowersComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FollowersComponent]
        });
        fixture = TestBed.createComponent(FollowersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=followers.component.spec.js.map