import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'book-list',
    loadChildren: () =>
      import('./core/book-collections/book-list/book-list.module').then(
        (m) => m.BookListModule
      ),
  },
  {
    path: 'create-book',
    loadChildren: () =>
      import('./core/book-collections/create-book/create-book.module').then(
        (m) => m.CreateBookModule
      ),
  },
  {
    path: 'edit-book/:id',
    loadChildren: () =>
      import('./core/book-collections/create-book/create-book.module').then(
        (m) => m.CreateBookModule
      ),
  },
  {
    path: '',
    redirectTo: '/book-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
