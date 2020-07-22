import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOneColsComponent } from './template-one-cols.component';

describe('TemplateOneColsComponent', () => {
  let component: TemplateOneColsComponent;
  let fixture: ComponentFixture<TemplateOneColsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateOneColsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOneColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
