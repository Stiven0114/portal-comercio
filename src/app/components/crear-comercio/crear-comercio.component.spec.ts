import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComercioComponent } from './crear-comercio.component';

describe('CrearComercioComponent', () => {
  let component: CrearComercioComponent;
  let fixture: ComponentFixture<CrearComercioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearComercioComponent]
    });
    fixture = TestBed.createComponent(CrearComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
