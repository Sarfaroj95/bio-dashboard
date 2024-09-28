import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopsPageComponent } from './sops-page.component';

describe('SopsPageComponent', () => {
  let component: SopsPageComponent;
  let fixture: ComponentFixture<SopsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
