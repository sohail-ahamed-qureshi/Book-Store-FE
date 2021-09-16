import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {

  transform(value: any = [], filterString: string) {
    if (filterString == '' || filterString == null) {
      return value;
    }

    const books = []
    for (const book of value) {
      if (book.bookName.includes(filterString) || book.description.includes(filterString)
        || book.author.includes(filterString)) {
        books.push(book);
      }
    }
    return books;
  }

}
