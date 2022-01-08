import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsCategoryTableComponent } from './ingredients-category-table.component';

describe('IngredientsCategoryTableComponent', () => {
  let component: IngredientsCategoryTableComponent;
  let fixture: ComponentFixture<IngredientsCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsCategoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
