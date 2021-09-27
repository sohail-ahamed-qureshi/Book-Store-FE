import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdonalDetailsComponent } from './perdonal-details.component';

describe('PerdonalDetailsComponent', () => {
  let component: PerdonalDetailsComponent;
  let fixture: ComponentFixture<PerdonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerdonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
