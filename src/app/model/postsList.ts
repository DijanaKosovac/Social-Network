import { Post } from './post';

export class PostList {
    postList: Post[];

    constructor(obj?:any) {
        this.postList = obj && obj.postList.map(data => {
            return new Post(data);
        }) || [];
    }
}