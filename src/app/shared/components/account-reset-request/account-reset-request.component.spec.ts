import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountResetRequestComponent } from './account-reset-request.component';

describe('AccountResetRequestComponent', () => {
  let component: AccountResetRequestComponent;
  let fixture: ComponentFixture<AccountResetRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountResetRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountResetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
