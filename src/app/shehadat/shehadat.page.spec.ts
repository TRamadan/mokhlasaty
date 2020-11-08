import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShehadatPage } from './shehadat.page';

describe('ShehadatPage', () => {
  let component: ShehadatPage;
  let fixture: ComponentFixture<ShehadatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShehadatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShehadatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
