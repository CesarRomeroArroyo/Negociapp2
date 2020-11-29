import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.scss'],
})
export class CategoriesModalComponent implements OnInit {

  @Output() public show = new EventEmitter<boolean>();
  public search = '';

  public categories: any[] = [];

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.obtener('categories').subscribe((data) => {
      this.categories = data;
    });
  }

  public searhCategory(): void {
    /**
     * TODO: filtrar categorias
     */
  }

  public pushCategory(): void {
    /**
     * TODO: emitCategory
     */
  }

  public close(): void {
    this.show.emit(false);
  }

}
