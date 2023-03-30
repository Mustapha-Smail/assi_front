import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifArticleComponent } from './modif-article.component';

describe('ModifArticleComponent', () => {
  let component: ModifArticleComponent;
  let fixture: ComponentFixture<ModifArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
