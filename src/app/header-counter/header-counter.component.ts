import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-counter',
  templateUrl: './header-counter.component.html',
  styleUrls: ['./header-counter.component.scss']
})
export class HeaderCounterComponent implements OnInit {

  value: Observable<number>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.value = this.contentService.getTotal();
  }

}
