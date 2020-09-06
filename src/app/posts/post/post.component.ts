import { PostService } from './../../post.service';
import { Observable } from 'rxjs';
import { Article } from './../../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.article$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id => this.postService.getArticle(id)),
      map(result => result.article),
      shareReplay(1)
    );
  }

}
