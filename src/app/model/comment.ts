

export class Comment {
    _id: number;
    posts: number;
    user: UserInfo;
    rating: number;
    text: string;
    date: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.posts = obj && obj.posts || null;
        this.user = obj && obj.user || null;
        this.rating = obj && obj.rating || 0;
        this.text = obj && obj.text || '';
        this.date = obj && obj.date || '';
    }
}


class UserInfo {
    name: string;
    picture: string;

    constructor(obj?:any) {
        this.name = obj && obj.name || '';
        this.picture = obj && obj.picture || '';
    }
}