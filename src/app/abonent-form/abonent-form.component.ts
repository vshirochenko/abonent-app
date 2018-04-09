import { Component, OnInit } from '@angular/core';
import {
  Abonent,
  DocType,
  AbonentsService,
  DataConstants
} from '../core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../shared/components/alert.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-abonent-form',
  templateUrl: './abonent-form.component.html',
  styleUrls: ['./abonent-form.component.scss'],
  providers: [
    AbonentsService
  ]
})
export class AbonentFormComponent implements OnInit {
  private readonly _abonentsService: AbonentsService;
  private readonly _router: Router;

  abonentLoaded: boolean;
  abonent: Abonent;

  constructor(
    abonentsService: AbonentsService,
    private dialog: MatDialog,
    router: Router) {
    this._abonentsService = abonentsService;
    this._router = router;

    this.abonentLoaded = false;
  }

  get docTypes() { return DataConstants.DOC_TYPES; }

  ngOnInit() {
    this.abonentLoaded = false;

    this._abonentsService.query('1').subscribe(data => {
      this.abonent = data;
      this.abonentLoaded = true;
    }, err => {
      console.log(err);
      this.abonentLoaded = true;
    });
  }

  showBreakScenarioWindow(e) {
    this.dialog.open(AlertComponent, {
      width: '300px',
      data: { message: 'Сценарий прерван' }
    });
  }

  addToBasket() {
    this._router.navigate(['/basket']);
  }
}
