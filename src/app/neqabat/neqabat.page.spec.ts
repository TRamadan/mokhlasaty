import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeqabatPage } from './neqabat.page';

describe('NeqabatPage', () => {
  let component: NeqabatPage;
  let fixture: ComponentFixture<NeqabatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeqabatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeqabatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
