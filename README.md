# A React and MongoDB exercise for neuefische students

## Installation
1. Clone this repo
2. Run `npm install`
3. Start your MongoDB! `mongod`
4. In a separate window run `npm start`

## Exercises

- Solve the following exercises in order
- Concentrate on JS, not on CSS
- Write *clean code*


### Get an overview
- the folder `src` (and `public`) contains the frontend code, the rest is backend
- Get to know the Card model
- Get to know the App.js

### Backend: add a post method
- Add a post method so you can add new Cards to the DB
- Add a few cards with `title` with POSTMAN

### Frontend: cleanup
- Extract the fetch method to seperate file called `services.js`
- Create a component `Card` that renders a card (it only has a title right now)
- Add a component `CardList` that renders all cards
- Your `App` should now just render `CardList` which renders multiple `Card`s

### Backend: enhance model
- Add a `description` and `tags` (an Array of Strings) to the Card model
- Delete all existing Cards from the DB
- Add a new Card via POSTMAN that contains everything from the cardSchema

### Frontend: update `Card`
- Add description and tags to your `Card`
- To show the tags, create a `Tag` component

### Frontend: Form
- Create a `Form` component to create new `Card`s
- Make sure to create an Array of Strings from the `tag` String
- Add that `Form` above the `CardList`
- Add a function `postCard` to `services`
- Use `postCard` in the Form and update the `state` when the server responds with a new card


### Frontend: LocalStorage
- Save all cards in localStorage
- Load all cards from localStorage when you initialize the `state`
- Update the localStorage, whenever you add a new `Card`

### Backend: enhance model and add PATCH
- Add a boolean property `bookmarked` to your cardSchema with a default value of `false`
- Add a `patch` method to your server in order to be able to update a card

### Frontend: Update Card (Advanced)
- Add a text to each card that says `bookmark` or `bookmarked` depending on the card data
- Add a new method `patchCard` to `services`
- Use that on click on `bookmark` to toggle the bookmark-state on the server
- When the server responds, update the card in your state
