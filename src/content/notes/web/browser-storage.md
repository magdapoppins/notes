# Storage in the browser

There are two kinds of storge in the browser that can be accessed and manipulated via code - session storage and local storage.

Session storage is unique to that session and will be cleared any time the user e.g. refreshes the page.

Local storage persists over sessions and can be used to store. Essentially, if you open a browser command line and type in `localStorage`, you can see that you have an object representing that storage present. You can also view these in chrome dev tools "application" tab, under "local storage".

The APIs available are (`localStorage`) `.setItem()`, `.getItem()` and `.removeItem()`.

Beware! Local storage is just a key-value store, so you can't add objects in there. If you need an object in there, do `JSON.stringify()` first.

```js
const snacks = ["candy", "cinnamon roll", "carrot cake"];
localStorage.setItem("snacks", JSON.stringify(snacks));
const snacksFromStorage = JSON.parse(localStorage.getItem("snacks"));
```
