import { Component, OnInit } from '@angular/core';
import { IBlog } from '../interfaces/iblog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: IBlog[] = [{ title: 'Title 1', text: 'some text 1', author: 'Ivan' }]

  constructor() { }

  ngOnInit(): void {
  }

}
