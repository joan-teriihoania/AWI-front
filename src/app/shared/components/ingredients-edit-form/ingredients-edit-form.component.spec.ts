import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsEditFormComponent } from './ingredients-edit-form.component';

describe('IngredientsEditFormComponent', () => {
  let component: IngredientsEditFormComponent;
  let fixture: ComponentFixture<IngredientsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
