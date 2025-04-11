import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavheaderComponent } from './sidenavheader.component';

describe('SidenavheaderComponent', () => {
  let component: SidenavheaderComponent;
  let fixture: ComponentFixture<SidenavheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
