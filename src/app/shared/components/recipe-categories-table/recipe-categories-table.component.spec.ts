import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoriesTableComponent } from './recipe-categories-table.component';

describe('RecipeCategoriesTableComponent', () => {
  let component: RecipeCategoriesTableComponent;
  let fixture: ComponentFixture<RecipeCategoriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCategoriesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
