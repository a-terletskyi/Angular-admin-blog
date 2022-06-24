import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url = environment.BACKEND_URL;
  // private api = {discounts: `${this.url}/discounts`}

  constructor(private http: HttpClient) { }
}
