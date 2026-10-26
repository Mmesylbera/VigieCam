import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierIncident } from './modifier-incident';

describe('ModifierIncident', () => {
  let component: ModifierIncident;
  let fixture: ComponentFixture<ModifierIncident>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierIncident],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierIncident);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
