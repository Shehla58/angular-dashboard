// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {ReportsComponent} from '../../reports/reports.component';

// describe('ReportsComponent', () => {
//   let component: ReportsComponent;
//   let fixture: ComponentFixture<ReportsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ReportsComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ReportsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsComponent } from './reports.component'; // ✅ Corrected path

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsComponent], // ✅ standalone import
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
