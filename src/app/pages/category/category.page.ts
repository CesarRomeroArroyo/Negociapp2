import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryURL, CategoryPath, dataTemplate, Template } from './models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public url: string;
  public template: Template;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.url = this.route.snapshot.paramMap.get('category');
    this.template = dataTemplate.find(item => item.type === this.url);
  }

  get urlPath(): string {
    switch (this.url) {
      case CategoryURL.Service:
        return CategoryPath.Service;
      case CategoryURL.Rent:
        return CategoryPath.Rent;
      case CategoryURL.Shop:
        return CategoryPath.Shop;
    }
  }

  public redirecTo(path: string): void {
    this.router.navigate([`category/${this.url}/${path}`]);
  }

}
