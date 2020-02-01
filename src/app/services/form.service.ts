import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentItem, ContentParams } from './content.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      comment: ['', [Validators.maxLength(512)]],
      value: [0, [Validators.min(-1000), Validators.max(1000), Validators.required]],
    });
  }

  setParams(item: ContentParams) {
    if (item) {
      this.form.get('comment').setValue(item.comment);
      this.form.get('value').setValue(item.value);
    }
  }

  getParams(): ContentParams {
    return {
      comment: this.form.get('comment').value,
      value: this.form.get('value').value
    };
  }


}
