import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { PostList } from '../model/postsList';

@Component({
  selector: 'fb-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
postList: PostList = new PostList();
showLoadMore: boolean = true;

parameters = {
  sort: '',
  sortDirection: '',
  page: 1,
  pageSize: 4

}

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.updatePost();
  }
  
  updatePost() {
    this.service.getAllPosts(this.parameters).subscribe(data => {
      data.postList.map(post => {
        this.postList.postList.push(post);
      })
    })
  }

  loadMore() {
    this.parameters.page = this.parameters.page + 1;
    this.updatePost();
    if(this.parameters.page >= 2) {
      this.showLoadMore = false;
    }
  }

}
