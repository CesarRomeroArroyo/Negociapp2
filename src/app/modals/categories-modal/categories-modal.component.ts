import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { StateApp } from 'src/app/core/services/state.service';
import { UniqueService } from 'src/app/core/services/unique.service';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.scss'],
})
export class CategoriesModalComponent implements OnInit {

  @Output() public showModal = new EventEmitter<boolean>();
  public categories: any[] = [];
  public categoriesTem: any[] = [];
  public categoriesSelected: string[] = [];
  public search = '';

  constructor(
    private firebase: FirebaseService,
    private subject: StateApp) { }

  ngOnInit() {
    this.firebase.obtener('categories').subscribe((data) => {
      this.categories = data;
      this.categoriesTem = data;
    });
    this.subject.getObservable().subscribe(data => {
      if (data.categories) this.categoriesSelected = data.categories;
    });
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
      this.categoriesSelected.push(value);
    }
    this.subject.setData({ categories: this.categoriesSelected });
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
