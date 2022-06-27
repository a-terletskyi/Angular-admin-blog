import { Component, OnInit } from '@angular/core';
import { IBlogRequest, IBlogResponse } from '../interfaces/iblog';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {
  blogs!: IBlogResponse[];
  inputTitle = ''; inputText = ''; inputAuthor = '';
  isValid = true;
  editStatus = false;
  editID!: number;

  constructor(private blogServise: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  resetForm(): void {
    this.inputTitle = '';
    this.inputText = '';
    this.inputAuthor = '';
  }

  getBlogs(): void { this.blogServise.getAll().subscribe((data) => { this.blogs = data }) }

  addPost(): void {
    if (this.inputTitle && this.inputText && this.inputAuthor) {
      this.isValid = true;
      const newPost: IBlogRequest = { title: this.inputTitle, text: this.inputText, author: this.inputAuthor };
      this.blogServise.create(newPost).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      });
    } else { this.isValid = false }
  }

  editPost(blog: IBlogResponse): void {
    this.inputTitle = blog.title;
    this.inputText = blog.text;
    this.inputAuthor = blog.author;
    this.editStatus = true;
    this.editID = blog.id;
  }

  saveEditPost(): void {
    if (this.inputTitle && this.inputText && this.inputAuthor) {
      this.isValid = true;
      const updatePost: IBlogRequest = { title: this.inputTitle, text: this.inputText, author: this.inputAuthor };
      this.blogServise.update(updatePost, this.editID).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      })
      this.editStatus = false;
    } else { this.isValid = false }
  }

  deletePost(id: number): void { this.blogServise.delete(id).subscribe(() => { this.getBlogs(); }) }
}
