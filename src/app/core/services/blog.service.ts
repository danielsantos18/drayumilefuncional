import { Injectable } from '@angular/core';

export interface Blog {
  id: number;
  title: string;
  image: string;
  link: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private blogsKey = 'blogs_data';

  getAll(): Blog[] {
    return JSON.parse(localStorage.getItem(this.blogsKey) || '[]');
  }

  add(blog: Blog) {
    const blogs = this.getAll();
    blogs.push(blog);
    localStorage.setItem(this.blogsKey, JSON.stringify(blogs));
  }

  update(updated: Blog) {
    let blogs = this.getAll();
    blogs = blogs.map((b) => (b.id === updated.id ? updated : b));
    localStorage.setItem(this.blogsKey, JSON.stringify(blogs));
  }

  delete(id: number) {
    let blogs = this.getAll();
    blogs = blogs.filter((b) => b.id !== id);
    localStorage.setItem(this.blogsKey, JSON.stringify(blogs));
  }
}
