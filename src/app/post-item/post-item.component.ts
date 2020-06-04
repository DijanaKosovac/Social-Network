import { CommentModalComponent } from './../comment-modal/comment-modal.component';
import { PostsService } from './../posts.service';
import { CommentList } from './../model/commentList';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'fb-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
@Input() post: Post;
parameters = {
  sort: '',
  sortDirection: ''
}
commentList: CommentList;

  constructor(private service: PostsService, private modal: NgbModal) { }

  ngOnInit() {
    this.service.getComments(this.post._id,this.parameters).subscribe(data => {
      this.commentList = data;
    })
  }

  openModal() {
    const modalRef = this.modal.open(CommentModalComponent);
    modalRef.componentInstance.post = this.post._id;
    modalRef.componentInstance.newCommentEmit.subscribe((receivedEntry) => {
      this.commentList.comments.push(receivedEntry);
    })
  }

}
