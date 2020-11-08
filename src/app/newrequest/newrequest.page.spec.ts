import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewrequestPage } from './newrequest.page';

describe('NewrequestPage', () => {
  let component: NewrequestPage;
  let fixture: ComponentFixture<NewrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
