class LibraryCollection {
    constructor(number) {
        this.capacity = number;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity == this.books.length) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let bookToPay = this.books.find(x => x.bookName == bookName);
        if (bookToPay == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (bookToPay.payed == true)
            throw new Error(`${bookName} has already been paid.`);

            bookToPay.payed = true;
            return `${bookName} has been successfully paid.`;
    }
    
    removeBook(bookName){
        let book = this.books.find(x => x.bookName == bookName);
        if (book == undefined) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if (book.payed == false)
            throw new Error(`${bookName} need to be paid before removing from the collection.`);

        
            this.books = this.books.filter(x => x.bookName != bookName);
            return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor =''){
        let result = [];
        if (bookAuthor ==='') {
           //return full info about the library 
           let emptySlots = this.capacity - this.books.length;
           result.push(`The book collection has ${ emptySlots } empty spots left.`)
           this.books.sort((a,b) => a.bookName - b.bookName);
           for (const book of this.books) {
               if (book.payed == true) {
                   result.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
               }else{
                result.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
               }
           }
           return result.join("\n");
        }else{
            let book = this.books.find(x=> x.bookAuthor == bookAuthor);
            if (book == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            if (book.payed == true) {
                return `${book.bookName} == ${book.bookAuthor} - Has Paid.`;
            }else{
              return `${book.bookName} == ${book.bookAuthor} - Not Paid.`;
            }

        }

    }
}
