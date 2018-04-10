import { Component, OnInit } from '@angular/core';
import {
  Abonent,
  DocType,
  AbonentsService,
  DataConstants,
  cloneAbonent
} from '../core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../shared/components/alert.component';
import { Router } from '@angular/router';
import { FieldType } from '../core/models/fieldType';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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


  //
  // Validation
  //
  abonentHtmlForm: FormGroup;
  surname: FormControl;
  departmentCode: FormControl;



  // Chosen field type (in dropdown): surname, etc.
  selectedFieldType: number;
  // Indicator for spinner
  abonentLoaded: boolean;
  // Editable version of abonent
  abonent: Abonent;
  // Copied abonent (previos version)
  copy: Abonent;

  constructor(
    abonentsService: AbonentsService,
    private dialog: MatDialog,
    router: Router) {
    this._abonentsService = abonentsService;
    this._router = router;

    this.abonentLoaded = false;
  }

  get docTypes() { return DataConstants.DOC_TYPES; }
  get fieldTypes() { return DataConstants.FIELD_TYPES; }
  get minIssueDate() { return DataConstants.MIN_ISSUE_DATE; }

  ngOnInit() {
    this.abonentLoaded = false;

    this._abonentsService.query('1').subscribe(data => {
      this.abonent = data;
      this.copy = cloneAbonent(this.abonent);
      this.abonentLoaded = true;
    }, err => {
      console.log(err);
      this.abonentLoaded = true;
    });

    this.surname = new FormControl(null, [Validators.required, Validators.pattern(/^[а-яА-Я]+$/)]);
    this.departmentCode = new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]);
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

  onFocusField(type: number) {
    this.selectedFieldType = type;
  }

}
