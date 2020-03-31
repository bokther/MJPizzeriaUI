import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Item } from 'src/app/models/item';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: Category[];
  items: Item[];
  showContent: string = "";

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(resp => this.categories = resp);
  }

  getItemsByCategory(cat_id: number): void {
    this.categoryService.getItem(cat_id)
      .subscribe(resp => this.items = resp);
  }

  toggleContent(category: string): void {
      this.showContent = category;
  }

}
