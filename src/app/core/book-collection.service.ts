import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { BookDetails } from '../helpers/types/types.model';

@Injectable({
  providedIn: 'root',
})
export class BookCollectionService {
  bookSubject = new BehaviorSubject<BookDetails[]>([]);
  book$ = this.bookSubject.asObservable();
  bookData: BookDetails[] = [
    {
      id: 'BNO001',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A tale of love and betrayal set in the Roaring Twenties.',
      category: 'Classic',
      image: './assets/images/the-great-gatsby.jpg',
      price: 10.99,
      pYear: 2023,
    },
    {
      id: 'BNO002',
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel about the dangers of totalitarianism.',
      category: 'Dystopian',
      image: './assets/images/nineteen-eighty-four.jpg',
      price: 8.99,
      pYear: 2023,
    },
    {
      id: 'BNO003',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A story of racial injustice in a small Southern town.',
      category: 'Fiction',
      image: './assets/images/to-kill-a-mockingbird.jpg',
      price: 12.99,
      pYear: 2023,
    },
    {
      id: 'BNO005',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description:
        'A classic romance that explores manners and marriage in early 19th century England.',
      category: 'Romance',
      image: './assets/images/pride-and-prejudice.jpg',
      price: 9.99,
      pYear: 2023,
    },
    {
      id: 'BNO006',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description:
        "A fantasy adventure about a hobbit's quest to win a share of a dragon's treasure.",
      category: 'Fantasy',
      image: './assets/images/the-hobbit.jpg',
      price: 11.99,
      pYear: 2023,
    },
  ];

  constructor() {
    this.getBooks();
  }

  getBooks() {
    return this.bookSubject.next(this.bookData);
  }

  createNewBook(book: BookDetails) {
    const currentBook = this.bookSubject.getValue();
    this.bookSubject.next([...currentBook, book]);
  }

  deleteBook(id: string) {
    const currentBook = this.bookSubject.getValue();
    this.bookSubject.next(currentBook.filter((value) => value.id !== id));
  }

  getBookById(id: string) {
    const currentBook = this.bookSubject.getValue();
    let bookById = currentBook.find((res) => res.id === id);
    return bookById;
  }

  editBook(updateBook: BookDetails) {
    const currentBook = this.bookSubject.getValue();
    this.bookSubject.next(
      currentBook.filter((value) =>
        value.id === updateBook.id ? updateBook : value
      )
    );
  }
}
