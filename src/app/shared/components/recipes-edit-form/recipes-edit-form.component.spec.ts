import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesEditFormComponent } from './recipes-edit-form.component';

describe('RecipesEditFormComponent', () => {
  let component: RecipesEditFormComponent;
  let fixture: ComponentFixture<RecipesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
