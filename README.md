# Bank Transactions Web App

# Code-Challenge

This is a React web application that allows users to view, add, and delete bank transactions. It fetches transaction data from a local server running JSON Server and displays it in a table. Users can search for transactions by description, sort transactions alphabetically by category or description, and delete transactions from the table. Additionally, the app includes an "Undo" feature that allows users to restore recently deleted transactions back to the table.

## Features

- View a table of all transactions
- Add new transactions to the table (local only, not persisted to the backend)
- Filter transactions by typing into the search bar
- Sort transactions alphabetically by category or description
- Delete transactions, with the ability to undo the deletion

## Setup & Pre-requisite Data

git clone the repository to your local machine using the command. 
$ git clone git@github.com:Cairie5/phase2-W1-Code-Challenge.git

Navigate to the project using the command 
cd 
$ cd phase2-W1-Code-Challenge

Run the code using the command code . on your terminal 
$ code .

Install the necessary dependencies required 
$ npm install

Start the local server (JSON Server) with the provided data by running the following command:
$ json-server --watch db.json

To run the React app, use the following command:
$ npm run dev

## Technologies Used

- React (Frontend)
- JSON Server (Backend)
- JavaScript (ES6+)
- HTML5
- CSS3

### Author
The author of this script is Patience Wangari Muraguri.

### License
MIT License Copyright (c) [2023] [Patience Muraguri]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
