import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoriesCreateFormComponent } from './recipe-categories-create-form.component';

describe('RecipeCategoriesCreateFormComponent', () => {
  let component: RecipeCategoriesCreateFormComponent;
  let fixture: ComponentFixture<RecipeCategoriesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCategoriesCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCategoriesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
