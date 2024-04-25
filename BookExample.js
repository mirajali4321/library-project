function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.status = function () {
    console.log(
      "The",
      this.title,
      "by ",
      this.author,
      ",",
      this.pages,
      ",",
      this.read,
      "."
    );
  };
}

const first = new Book("Al-rahekhul Makhdum" , "maulana safi" , "650 pages" , "not yet fully");

first.status();
