// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NotificationsComponent } from './notifications.component';

// describe('NotificationsComponent', () => {
//   let component: NotificationsComponent;
//   let fixture: ComponentFixture<NotificationsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [NotificationsComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(NotificationsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsComponent } from './notifications.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationsComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatSlideToggleModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
