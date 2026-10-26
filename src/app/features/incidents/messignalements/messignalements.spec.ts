import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Messignalements } from './messignalements';

describe('Messignalements', () => {
  let component: Messignalements;
  let fixture: ComponentFixture<Messignalements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messignalements],
    }).compileComponents();

    fixture = TestBed.createComponent(Messignalements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
