class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
        this.list0fArticles = [];
        this.guests = [];


    }

    addArticle(inputModel, articleName, quantity) {
        let model = inputModel.toLowerCase();
        let keys = (Object.keys(this.possibleArticles).toString().toLowerCase());
        if (!keys.includes(model)) {
            throw new Error('This article model is not included in this gallery!"')
        } else {
            let itemExists = this.list0fArticles.find(x => x.articleName == articleName && x.articleModel == model);
            if (itemExists !== undefined) {
                itemExists.quantity += 1;
            } else {
                this.list0fArticles.push({
                    articleModel: model,
                    articleName: articleName,
                    quantity: quantity

                });


            }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
    }


    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
           throw new Error (`${guestName} has already been invited.`);
        }
        let points = 0;
        switch (personality) {
            case 'Vip': points = 500;
                break;
            case 'Middle': points = 250;
                break;
            default: points = 50;
        }
        this.guests.push({
            guestName: guestName,
            points: points,
            purchaseArticle: 0
        });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let articleToBuy = this.list0fArticles.find
            (x => x.articleName == articleName && x.articleModel == articleModel);
        if (articleToBuy === undefined) {
            throw new Error(`This article is not found.`);
        }
        if (articleToBuy.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        let buyer = this.guests.find(x => x.guestName == guestName);
        if (buyer === undefined) {
            return `This guest is not invited.`;
        } else {
            let articlePoint = this.possibleArticles[articleModel];
            if (buyer.points >= articlePoint) {
                buyer.points -= articlePoint;
                buyer.purchaseArticle += 1;
                articleToBuy.quantity -= 1;
                return `${guestName} successfully purchased the article worth ${articlePoint} points.`;
            } else {
                return `You need to more points to purchase the article.`;
            }
        }
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            for (const article of this.list0fArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            for (const guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }

        }
        return result.join('\n');
    }

}


const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
