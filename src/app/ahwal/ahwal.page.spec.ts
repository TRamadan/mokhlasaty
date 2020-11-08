import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhwalPage } from './ahwal.page';

describe('AhwalPage', () => {
  let component: AhwalPage;
  let fixture: ComponentFixture<AhwalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhwalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhwalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
