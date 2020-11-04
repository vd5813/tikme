### Library App
Allows to Issue(Available) and Return(Issued) books. Also has a transaction log for books that are issued and returned.

### Setup

#### DB
Needs MongoDB installed on machine
Download url - https://www.mongodb.com/try/download/community

#### Config
##### install dependencies
run - npm install
##### script to start server
npm run startDev

#### Note: The UI does not have facility to add book. You can use `Postman` to add a few. 
-Use http://localhost:3000/addBook to add book.
-Request Body: { "name": "Book1", "status": "Available" }
