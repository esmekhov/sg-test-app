import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss']
})
export class ContentModalComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit();
  }

}
