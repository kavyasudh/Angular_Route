import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdNotFoundComponent } from './prod-not-found.component';

describe('ProdNotFoundComponent', () => {
  let component: ProdNotFoundComponent;
  let fixture: ComponentFixture<ProdNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
