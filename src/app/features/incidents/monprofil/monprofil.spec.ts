import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Monprofil } from './monprofil';

describe('Monprofil', () => {
  let component: Monprofil;
  let fixture: ComponentFixture<Monprofil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Monprofil],
    }).compileComponents();

    fixture = TestBed.createComponent(Monprofil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
