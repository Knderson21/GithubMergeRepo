import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChungusComponent } from './chungus.component';

describe('ChungusComponent', () => {
  let component: ChungusComponent;
  let fixture: ComponentFixture<ChungusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChungusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChungusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
