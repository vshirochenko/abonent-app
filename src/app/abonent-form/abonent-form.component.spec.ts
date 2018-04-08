import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentFormComponent } from './abonent-form.component';

describe('AbonentFormComponent', () => {
  let component: AbonentFormComponent;
  let fixture: ComponentFixture<AbonentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
