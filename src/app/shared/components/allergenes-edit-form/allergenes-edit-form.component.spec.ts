import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenesEditFormComponent } from './allergenes-edit-form.component';

describe('AllergenesEditFormComponent', () => {
  let component: AllergenesEditFormComponent;
  let fixture: ComponentFixture<AllergenesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
