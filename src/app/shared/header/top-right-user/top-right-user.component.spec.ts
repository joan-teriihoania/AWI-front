import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightUserComponent } from './top-right-user.component';

describe('TopRightUserComponent', () => {
  let component: TopRightUserComponent;
  let fixture: ComponentFixture<TopRightUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRightUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRightUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
