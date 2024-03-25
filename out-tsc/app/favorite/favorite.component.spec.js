import { TestBed } from '@angular/core/testing';
import { FavoriteComponent } from './favorite.component';
describe('FavoriteComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FavoriteComponent]
        });
        fixture = TestBed.createComponent(FavoriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=favorite.component.spec.js.map