import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check count is init', () => {
    let spanCount: HTMLSpanElement = fixture.nativeElement.querySelector('[data-testId="counter"]')
    let text = spanCount.innerHTML
    expect(text).toBe('0');
  })

  it('increment value', () => {
    let buttonIncrement: HTMLElement = fixture.nativeElement.querySelector('[data-testId="increment"]')
    let spanCount: HTMLSpanElement = fixture.nativeElement.querySelector('[data-testId="counter"]')
    let text = spanCount.innerHTML
    expect(text).toBe('0');
    buttonIncrement.click();
    fixture.detectChanges();
    spanCount = fixture.nativeElement.querySelector('[data-testId="counter"]')
    text = spanCount.innerHTML
    expect(text).toBe('1')
  })
});
