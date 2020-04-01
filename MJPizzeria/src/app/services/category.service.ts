import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = 'http://127.0.0.1:5000/category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/category`)
  }

  getItem(category_id?: number) : Observable<Item[]> {
      return this.http.get<Item[]>(`http://127.0.0.1:5000/item?category_id=${category_id}`)
  }
}
