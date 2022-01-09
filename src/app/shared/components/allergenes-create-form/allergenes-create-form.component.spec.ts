import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenesCreateFormComponent } from './allergenes-create-form.component';

describe('AllergenesCreateFormComponent', () => {
  let component: AllergenesCreateFormComponent;
  let fixture: ComponentFixture<AllergenesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenesCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
