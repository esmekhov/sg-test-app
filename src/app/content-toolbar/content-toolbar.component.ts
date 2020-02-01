import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-toolbar',
  templateUrl: './content-toolbar.component.html',
  styleUrls: ['./content-toolbar.component.scss']
})
export class ContentToolbarComponent implements OnInit {

  @Output()
  add = new EventEmitter();

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  onAdd() {
    this.add.emit();
  }

}
