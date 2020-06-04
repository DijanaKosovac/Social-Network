import { Comment } from './comment';


export class CommentList {
    comments: Comment[];

    constructor(obj?:any) {
        this.comments = obj && obj.map(data => {
            return new Comment(data);
        }) || [];
    }
}