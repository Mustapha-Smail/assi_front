import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageAccessoiresComponent } from './stockage-accessoires.component';

describe('StockageAccessoiresComponent', () => {
  let component: StockageAccessoiresComponent;
  let fixture: ComponentFixture<StockageAccessoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockageAccessoiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockageAccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
