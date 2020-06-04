import { Comment } from './../model/comment';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fb-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit {
@Input() postId: number;
comment: Comment;
@Output() newCommentEmit = new EventEmitter();
  constructor(private service: PostsService, private modal:NgbModal ) { }

  ngOnInit() {
    this.comment = new Comment();
  }

  newComment() {
   this.comment.posts = this.postId;
   this.comment.user = {'name': 'Dijana Kosovac', 'picture': ''};
   this.comment.rating = 0;
   this.comment.date = (new Date).toISOString();
   this.service.saveComment(this.comment).subscribe(res => {
     this.comment = new Comment();
     this.newCommentEmit.emit(res);
   })
   this.modal.dismissAll();

  }

}
