// What are the levels of activities to do at a book store?
//     - Enter the store
//     - Explore the store
//     - Read a book / buy a book
//     - leave the store

var entranceExit = function (move) {
  if (move === "enter") {
    console.log("You have entered the store!");
  }
  if (move === "exit") {
    console.log("You have exited the store!");
  }
};

var customerAction = function (action, cb) {
  cb(action);
};

customerAction('enter', entranceExit);
customerAction('exit', entranceExit);