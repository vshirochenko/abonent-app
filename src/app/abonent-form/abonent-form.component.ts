import { Component, OnInit } from '@angular/core';
import { Abonent } from '../core';
import { DocType } from '../core/models/doc-type';
import { Constants } from '../core/constants/constants';

@Component({
  selector: 'app-abonent-form',
  templateUrl: './abonent-form.component.html',
  styleUrls: ['./abonent-form.component.scss']
})
export class AbonentFormComponent implements OnInit {
  abonent: Abonent;

  constructor() { }

  get docTypes() { return Constants.DOC_TYPES; }

  ngOnInit() {
    this.abonent = new Abonent();
    this.abonent.surname = 'Shirochenko';
    this.abonent.issueDate = new Date();
  }

}
