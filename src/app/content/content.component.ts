import { Component, OnInit } from '@angular/core';
import { ContentItem } from '../services/content.service';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private modalVisible = false;
  private editMode = false;
  private item: ContentItem;

  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.bus.subscribe((event) => {
      if (event === 'close') {
        this.onCloseModal();
      }
    });
  }

  onEdit(row: ContentItem) {
    this.editMode = true;
    this.item = row;
    this.modalVisible = true;
  }

  onAdd() {
    this.item = {
      id: 0,
      comment: '',
      value: 0
    };
    this.modalVisible = true;
  }

  onCloseModal() {
    this.editMode = false;
    this.modalVisible = false;
    this.item = null;
  }
}
