import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

export interface ContentItem {
  readonly id: number;
  value: number;
  comment: string;
}

export type ContentParams = Omit<ContentItem, 'id'>;

export interface ContentItemStore {
  items: ContentItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private maxId = 0;
  private store: ContentItemStore = {
    items: []
  };
  private observableStore = new BehaviorSubject<ContentItem[]>(this.store.items);
  readonly items = this.observableStore.asObservable();

  constructor() {
    this.addItem({ value: 100, comment: 'Test 1' });
    this.addItem({ value: 200, comment: 'Test 2' });
    this.addItem({ value: 300, comment: 'Test 3' });
  }

  getData() {
    return this.items;
  }

  getPage(page: number, size: number) {
    return this.items.pipe(map((data) => {
      return data.slice(page * size, (page + 1) * size);
    }));
  }

  getTotal() {
    return this.items.pipe(map((data) => {
      return data.reduce((acc, item) => {
        return acc + item.value;
      }, 0);
    }));
  }

  addItem(item: ContentParams) {
    this.store.items.push({
      id: this.maxId++,
      ...item
    });
    this.observableStore.next(this.store.items);
  }

  updateItem(item: ContentItem) {
    const foundIndex = this.store.items.findIndex((i) => i.id === item.id);
    if (foundIndex > -1) {
      this.store.items[foundIndex] = item;
      this.observableStore.next(this.store.items);
    }
  }

  deleteItem(item: ContentItem) {
    const foundIndex = this.store.items.findIndex((i) => i.id === item.id);
    if (foundIndex > 0) {
      delete this.store.items[foundIndex];
      this.observableStore.next(this.store.items);
    }
  }

}
