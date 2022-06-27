import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from '../interfaces/iblog';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  blogs!: IBlogResponse[];

  constructor(private blogServise: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void { this.blogServise.getAll().subscribe((data) => { this.blogs = data }) }
}
