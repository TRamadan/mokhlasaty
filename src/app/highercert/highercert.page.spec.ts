import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HighercertPage } from './highercert.page';

describe('HighercertPage', () => {
  let component: HighercertPage;
  let fixture: ComponentFixture<HighercertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighercertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HighercertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
