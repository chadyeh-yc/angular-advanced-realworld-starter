import { PostService } from './../post.service';
import { Article } from './../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 article$: Observable<Article[]>;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.article$ = this.postService.getArticles()
    .pipe(
      map(result => result.articles)
    );
  }

}
