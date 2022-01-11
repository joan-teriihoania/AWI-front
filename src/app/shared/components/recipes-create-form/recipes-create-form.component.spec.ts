import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCreateFormComponent } from './recipes-create-form.component';

describe('RecipesCreateFormComponent', () => {
  let component: RecipesCreateFormComponent;
  let fixture: ComponentFixture<RecipesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
