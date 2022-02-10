class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    like(username) {
        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        this._likes.shift(x => x.username == username)
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.some(c => c.Id === id)) {
            let newComment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            };

            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }

        let commentToReply = this._comments.find(c => c.Id == id);
        let replyNextId = commentToReply.Replies.length + 1;
        let replyId = Number(`${commentToReply.Id}.${replyNextId}`);
        let reply = {
            Id: replyId,
            Username: username,
            Content: content
        };
        commentToReply.Replies.push(reply);
        return `You replied successfully`;
    }

    get likes() {
        let totalLikes = this._likes.length;
        if (totalLikes === 0) {
            return `${this.title} has 0 likes`;
        }
        let username = this._likes[0];
        if (totalLikes === 1) {
            return `${username} likes this story!`;
        } else {
            return `${username} and ${totalLikes - 1} others like this story!`;
        }
    }

    toString(sortingType){
        const sortVersion = {
            asc: (a,b)=> a.Id - b.Id,
            desc: (a,b) => b.Id - a.Id,
            username: (a,b) => a.Username.localeCompare(b.Username)
        }

     let comments = this._comments.sort(sortVersion[sortingType]);
     comments.forEach(c=> c.Replies.sort(sortVersion[sortingType]));

     let commentsStrArr = [];
     for (const comment of comments) {
         let commentString = `-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
         let repliesString = comment.Replies.map(r => `--- ${r.Id}. ${r.Username}: ${r.Content}`)
         .join('\n');
         repliesString = comment.Replies.length > 0
         ? `\n${repliesString}`
         : '';
         let combinedStr = `${commentString}${repliesString}`;
         commentsStrArr.push(combinedStr);
     }

let fullCommentStr = commentsStrArr.join('\n');

        return`Title: ${this.title}
Creator: ${this.creator}
Likes: ${this._likes.length}
Comments:\n${fullCommentStr}`;
    

    }


}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));







