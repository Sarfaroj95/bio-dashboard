import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCodeComponent } from './access-code.component';

describe('AccessCodeComponent', () => {
  let component: AccessCodeComponent;
  let fixture: ComponentFixture<AccessCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
