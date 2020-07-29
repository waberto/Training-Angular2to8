import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  @Input() initItem: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      totalCaHt: [this.initItem.totalCaHt],
      name: [
        this.initItem.name,
        [Validators.required, Validators.minLength(2)]
      ],
      tva: [this.initItem.tva],
      state: [this.initItem.state],
      comment: [this.initItem.comment],
      id: [this.initItem.id],
    })
  }
  
  public onSubmit(){
    this.submited.emit(this.form.value);
  }
}
