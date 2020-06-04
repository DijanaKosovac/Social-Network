import { Comment } from './../model/comment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fb-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
@Input() comment: Comment;
@Input() i: number;
  constructor() { }

  ngOnInit() {
  }

}
