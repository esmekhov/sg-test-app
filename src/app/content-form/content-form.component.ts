import { Component, OnInit, EventEmitter, Input, SimpleChanges, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../services/form.service';
import { ContentItem, ContentService } from '../services/content.service';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent implements OnInit, OnChanges {

  @Input()
  contentItem: ContentItem;

  @Input()
  editMode: boolean;

  contentForm: FormGroup;

  constructor(public formService: FormService, public contentService: ContentService, public eventsSerivce: EventsService) {
    this.contentForm = this.formService.form;
  }

  get title() {
    return this.editMode ? `Запись #${this.contentItem.id}` : `Новая запись`;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formService.setParams(this.contentItem);
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contentForm.valid) {
      if (this.editMode) {
        this.contentService.updateItem({
          id: this.contentItem.id,
          ...this.formService.getParams()
        });
      } else {
        this.contentService.addItem(this.formService.getParams());
      }

      this.eventsSerivce.bus.emit('close');
    }
  }

  onCancel() {
    this.eventsSerivce.bus.emit('close');
  }

}
