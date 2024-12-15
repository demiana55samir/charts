import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDonutsComponent } from './my-donuts.component';

describe('MyDonutsComponent', () => {
  let component: MyDonutsComponent;
  let fixture: ComponentFixture<MyDonutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDonutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
