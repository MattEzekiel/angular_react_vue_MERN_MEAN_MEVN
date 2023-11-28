import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginapagina404Component } from './paginapagina404.component';

describe('Paginapagina404Component', () => {
  let component: Paginapagina404Component;
  let fixture: ComponentFixture<Paginapagina404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paginapagina404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Paginapagina404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
