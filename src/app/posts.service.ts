import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostList } from './model/postsList';
import { map } from 'rxjs/operators';
import { CommentList } from './model/commentList';
import { Comment } from './model/comment';


const url = 'http://localhost:3000/api/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(params?:any): Observable<PostList> {
    let queryParams = {};
    if(params) {
      queryParams = {
        params: new HttpParams()
        .set('sort', 'date')
        .set('sortDirection', 'asc')
        .set('page', params.page || '' )
        .set('pageSize', params.pageSize || '')
      }
    }
    return this.http.get(url, queryParams).pipe(map(data => {
      return new PostList(data);
    }))
  }

  getComments(id:number,params?:any): Observable<CommentList> {
    let queryParams = {};
    if(params) {
      queryParams = {
        params: new HttpParams()
        .set('sort', 'rating')
        .set('sortDirection', 'desc')
      }
    }
    return this.http.get(url+'/'+id+'/comments',queryParams).pipe(map(data => {
      return new CommentList(data);
    }))
  }

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post(url+'/'+comment.posts+'/comments', comment).pipe(map(data => {
      return new Comment(data);
    }))
  }
}
