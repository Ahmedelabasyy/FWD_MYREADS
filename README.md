# MyReads Website

## Description

In the MyReads project, you'll have a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. And have the control of all bookes and search for any book you want.

## Installation

To get started developing right away:

- install all project dependencies with `npm install`

```bash
npm install
```

- start the development server with `npm start`

```bash
npm start
```

# Usage
That API help you for getting data and contains the methods we are using to perform necessary operations on the backend:
## Backend Server

[`BooksAPI.js`](src/BooksAPI.js) 

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Technologies

This App made with react using context API to handle the state of the app and components are styled with CSS
## Contributing

This repository is the final submitting for the myReads Book Track app, You can find how to use or update this project in the installation apove.
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
