import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signaler } from './signaler';

describe('Signaler', () => {
  let component: Signaler;
  let fixture: ComponentFixture<Signaler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaler],
    }).compileComponents();

    fixture = TestBed.createComponent(Signaler);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
