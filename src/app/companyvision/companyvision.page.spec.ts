import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyvisionPage } from './companyvision.page';

describe('CompanyvisionPage', () => {
  let component: CompanyvisionPage;
  let fixture: ComponentFixture<CompanyvisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyvisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyvisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
