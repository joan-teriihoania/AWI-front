import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCategoriesEditFormComponent } from './recipe-categories-edit-form.component';

describe('RecipeCategoriesEditFormComponent', () => {
  let component: RecipeCategoriesEditFormComponent;
  let fixture: ComponentFixture<RecipeCategoriesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCategoriesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCategoriesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
