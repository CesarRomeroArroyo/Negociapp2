import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FirebaseService } from '@core/services/firebase.service';
import { StateApp } from '@core/services/state.service';

import { SelectType } from '@app/models/home/select-type';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.scss'],
})
export class CategoriesModalComponent implements OnInit {

  @Input() categories: SelectType[] = [];
  @Input() categoriesTem: any[] = [];
  @Input() categoriesSelected: string[] = [];

  @Output() public showModal = new EventEmitter<boolean>();
  @Output() public categoriesSelectedOutput = new EventEmitter<string[]>();

  public search = '';

  constructor(
    private firebase: FirebaseService,
    private subject: StateApp) { }

  ngOnInit() {
    // this.subject.getObservable().subscribe(data => {
    //   if (data.categories) this.categoriesSelected = data.categories;
    // });
  }

  public searhCategory(): void {
    this.categoriesTem = this.categories;
    this.categoriesTem = this.categories.filter(category => {
      return category.value.toUpperCase().indexOf(this.search.toUpperCase()) !== -1;
    });
  }

  public pushCategory(value: string): void {
    const found = this.categoriesSelected.filter((data) => {
      return data.toUpperCase() === value.toUpperCase();
    });
    if (found.length > 0) {
      this.categoriesSelected = this.categoriesSelected.filter((data) => {
        return data.toUpperCase() !== value.toUpperCase();
      });
    } else {
      if (this.categoriesSelected.length === 0) {
        this.categoriesSelected = [value];
      } else {
        this.categoriesSelected = [...this.categoriesSelected, value];
      }
    }
    this.subject.setData({ categories: this.categoriesSelected });
    this.categoriesSelectedOutput.emit(this.categoriesSelected);
  }

  public selectCategory(category: any): boolean {
    const found = this.categoriesSelected.filter((data) => {
      return data.toUpperCase() === category.toUpperCase();
    });
    if (found.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
