import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/helpers/types/types.model';
import { Router } from '@angular/router';
import { BookCollectionService } from '../../book-collection.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: BookDetails[] = [];
  constructor(private bookCollectionService: BookCollectionService, private router: Router) {}

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this.bookCollectionService.book$.subscribe((res) => {
      console.log(res);
      
      this.books = res
    });
    
  }

  addNewBook() {
    this.router.navigate(['/create-book'])
  }

  deleteBook(id: string) {
    this.bookCollectionService.deleteBook(id)
  }

  editBook(id: string) {
    this.router.navigate(['/edit-book', id])
  }
}
