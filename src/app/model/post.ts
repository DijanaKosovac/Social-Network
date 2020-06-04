export class Post {
    _id: number;
    text: string;
    user: UserInfo;
    date: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.text = obj && obj.text || '';
        this.user = obj && obj.user || '';
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