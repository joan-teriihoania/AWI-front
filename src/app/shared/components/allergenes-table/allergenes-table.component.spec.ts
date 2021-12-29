import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenesTableComponent } from './allergenes-table.component';

describe('AllergenesTableComponent', () => {
  let component: AllergenesTableComponent;
  let fixture: ComponentFixture<AllergenesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergenesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergenesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
