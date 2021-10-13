import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContruindoOFeedComponent } from './contruindo-ofeed.component';

describe('ContruindoOFeedComponent', () => {
  let component: ContruindoOFeedComponent;
  let fixture: ComponentFixture<ContruindoOFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContruindoOFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContruindoOFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
