import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsCreateFormComponent } from './ingredients-create-form.component';

describe('IngredientsCreateFormComponent', () => {
  let component: IngredientsCreateFormComponent;
  let fixture: ComponentFixture<IngredientsCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
