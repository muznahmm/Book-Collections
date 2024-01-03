import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookCollectionService } from '../../book-collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetails } from 'src/app/helpers/types/types.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  createForm!: FormGroup;
  title = 'Create';
  buttonName = 'Add New Book';
  bookId: any;
  constructor(
    private fb: FormBuilder,
    private bookCollectionService: BookCollectionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  get getFormControl() {
    return this.createForm as FormGroup;
  }
  ngOnInit(): void {
    this.addBooks();
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.title = 'Update';
        this.buttonName = 'Update Book';
        this.bookId = params['id']
        let bookByID = this.bookCollectionService.getBookById(this.bookId)
        this.createForm.setValue({id: this.bookId, title: bookByID?.title, author: bookByID?.author, price: bookByID?.price, image: bookByID?.image, pYear: bookByID?.pYear, description: bookByID?.description, category: bookByID?.category})
      }
    });
  }

  addBooks() {
    this.createForm = this.fb.group({
      id: this.fb.control(this.generateUniqueId()),
      title: this.fb.control('', Validators.required),
      author: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      category: this.fb.control(''),
      pYear: this.fb.control('', Validators.required),
      image: this.fb.control('', Validators.required),
      price: this.fb.control('', Validators.required),
    });
  }

  generateUniqueId(): string {
    const bID = 'BNO';
    const randomNum = (Math.random() * 10000000).toFixed(0);
    return bID + randomNum;
  }

  onSubmit() {
    if(!this.bookId) {
      this.bookCollectionService.createNewBook(this.createForm.value);
    } else {
      const updateContact = {
        ...this.createForm.value,
        id: this.bookId
      }
      this.bookCollectionService.editBook(updateContact)

    }
    this.router.navigate(['']);
  }
}
