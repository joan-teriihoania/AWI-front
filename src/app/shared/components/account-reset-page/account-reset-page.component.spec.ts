import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountResetPageComponent } from './account-reset-page.component';

describe('AccountResetPageComponent', () => {
  let component: AccountResetPageComponent;
  let fixture: ComponentFixture<AccountResetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountResetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
