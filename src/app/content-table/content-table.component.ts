import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentService, ContentItem } from '../services/content.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {

  private data: Observable<ContentItem[]>;

  @Output()
  edit = new EventEmitter();

  constructor(private contentService: ContentService) { }

  async ngOnInit() {
    this.data = await this.contentService.getPage(0, 10);
  }

  onRowClick(row: ContentItem) {
    this.edit.emit(row);
  }

}
