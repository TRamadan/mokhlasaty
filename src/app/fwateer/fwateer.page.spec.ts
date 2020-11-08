import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FwateerPage } from './fwateer.page';

describe('FwateerPage', () => {
  let component: FwateerPage;
  let fixture: ComponentFixture<FwateerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwateerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FwateerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
