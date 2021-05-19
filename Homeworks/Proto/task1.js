const Pagination = {
  pageArr: [],
  arr: [],
  pageNum: 0,
  init: (alp, page) => {
    for (let i = 0; i < alp.length; i++) {
      const element = alp[i];
      if (i % page === 0 && i !== 0) {
        Pagination.pageArr.push(Pagination.arr);
        Pagination.arr = [];
        Pagination.arr.push(element);
      } else Pagination.arr.push(element);
    }
    if (Pagination.arr) {
      Pagination.pageArr.push(Pagination.arr);
    }
  },
  getPageItems: () => console.log(Pagination.pageArr[Pagination.pageNum]),
  firstPage: () => (Pagination.pageNum = 0),
  nextPage: () => ++Pagination.pageNum,
  prevPage: () => --Pagination.pageNum,
  lastPage: () => (Pagination.pageNum = Pagination.pageArr.length - 1),
  goToPage: (num) => (Pagination.pageNum = num),
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 5);

Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3);
