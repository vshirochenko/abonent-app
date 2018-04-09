import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentFormComponent } from './abonent-form.component';
import { SharedModule } from '../shared/modules/shared.module';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AbonentsService } from '../core/services/abonents.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Abonent } from '../core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogContent, MatDialogModule } from '@angular/material';
import { AlertComponent } from '../shared/components/alert.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

const ABONENT_OBJ = new Abonent();

class AbonentsServiceMock extends AbonentsService {
  query(): Observable<Abonent> {
    return Observable.of(ABONENT_OBJ);
  }
}

describe('AbonentFormComponent', () => {
  let component: AbonentFormComponent;
  let fixture: ComponentFixture<AbonentFormComponent>;
  let _abonentsServiceMock: AbonentsServiceMock;
  let _router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    _router = { navigate: jasmine.createSpy('navigate') };
    _abonentsServiceMock = new AbonentsServiceMock(null);
    _abonentsServiceMock.query = jasmine.createSpy('query').and.returnValue(new Observable(obs => {
      obs.next(new Abonent());
      obs.complete();
    }));

    TestBed.configureTestingModule({
      declarations: [AbonentFormComponent, AlertComponent],
      providers: [
        { provide: Router, useValue: _router },
        { provide: HttpClient },
        { provide: AbonentsService, useValue: _abonentsServiceMock }
      ],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AbonentFormComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should load abonent', () => {
    // Arrange
    component = new AbonentFormComponent(_abonentsServiceMock, null, null);

    // Act
    component.ngOnInit();

    // Assert
    expect(_abonentsServiceMock.query).toHaveBeenCalledTimes(1);
  });

  it('should open modal window if clicked on breaking scenario', async () => {
    // Arrange
    spyOn(component, 'showBreakScenarioWindow');
    const breakScenarioBtn = fixture.debugElement.nativeElement.querySelector('.break-scenario');

    // Act
    breakScenarioBtn.click();

    // Assert
    fixture.whenStable().then(() => {
      expect(component.showBreakScenarioWindow).toHaveBeenCalledTimes(1);
    });
  });

  it('should add to basket if click on appropriate button', async () => {
    // Arrange
    spyOn(component, 'addToBasket');
    const addToBasketBtn = fixture.debugElement.nativeElement.querySelector('.add-to-basket');

    // Act
    addToBasketBtn.click();

    // Assert
    fixture.whenStable().then(() => {
      expect(component.addToBasket).toHaveBeenCalledTimes(1);
    });
  });

  it('should navigate to basket page after adding to basket', async () => {
    // Arrange
    debugger;
    const r = fixture.debugElement.injector.get(Router);
    component = new AbonentFormComponent(_abonentsServiceMock, null, r);

    // Act
    component.addToBasket();

    // Assert
    expect(r.navigate).toHaveBeenCalledWith(['/basket']);
  });
});
