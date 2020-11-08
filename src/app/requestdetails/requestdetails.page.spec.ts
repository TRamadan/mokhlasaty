import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestdetailsPage } from './requestdetails.page';

describe('RequestdetailsPage', () => {
  let component: RequestdetailsPage;
  let fixture: ComponentFixture<RequestdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
