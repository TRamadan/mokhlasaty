import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifictionsPage } from './notifictions.page';

describe('NotifictionsPage', () => {
  let component: NotifictionsPage;
  let fixture: ComponentFixture<NotifictionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifictionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifictionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
