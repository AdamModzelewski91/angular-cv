import { ComponentFixture, fakeAsync, TestBed, tick, flush } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestComponent } from '../shared/test.component.mock';
import { TooltipDirective } from "./tooltip.directive";

describe("TooltipDirective", () => {
  let fixture: ComponentFixture<TestComponent>,
      directive: TooltipDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDirective, TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it("should have 2 elements with tooltip", () => {
      const tooltip = fixture.debugElement.queryAll(By.directive(TooltipDirective));
      expect(tooltip.length).toBe(2);
    })

  it("should create Tooltip for 5 sec", fakeAsync(()=> {
    const button = fixture.debugElement.query(By.directive(TooltipDirective));
    const mouseenter = new MouseEvent('mouseenter');
    button.nativeElement.dispatchEvent(mouseenter);
    
    // show after 
    tick(190);
    expect(document.querySelector('.tooltip-container')?.textContent).toEqual('Test Tooltip');
    
    // removed after 5 sec
    tick(5000);
    expect(document.querySelector('.tooltip-container')).toBeFalsy();
  }));

  it("should tooltip disapear after mouse leave element", fakeAsync(() => {

    const button = fixture.debugElement.query(By.directive(TooltipDirective));
    let mouseenter = new MouseEvent('mouseenter');
    button.nativeElement.dispatchEvent(mouseenter);
    
    // show after 
    tick(190);

    mouseenter = new MouseEvent('mouseleave');
    button.nativeElement.dispatchEvent(mouseenter);
    expect(document.querySelector('.tooltip-container')).toBeFalsy();
    flush();
  }));
})