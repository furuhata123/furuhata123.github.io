---
title: Serverless Guestbook on Static Site with Canvas
tags: ['blog','Frontend']
date: 2026-02-14
---
The goal is to add a guestbook to my github page. The guestbook should include textareas of name and message, and an optional "draw something".

The constraints were:
- No server
- No database
- Free
- Customized
- Deplyable to github pages
- As simple as possible

After several attempts, I ended up using `google form -> google sheet -> google app scripts.`
<!-- readmore -->
# Initial Approach
My initial approach was to build a netlify app, since netlify has built-in form, and I saw someone building a netlify guestbook with 11ty. The problem is netify and github are two different system, although you can iframe netlify app to gh page? but there could be many problems and I want to avoid iframe. The next idea was,`netlify -> some automation service (zapire?) -> github`. And this is where stupidity began. Since netlify form doesn't support json...
```js
User
  ↓
Netlify Form
  ↓
Google Sheet (as database)
  ↓
Export to JSON
  ↓
GitHub Repository
  ↓
Static Build

```
...this is what I came up with. Note that two ends doesn't meet, so... efforts in vain, this happens when the process is too complicated. But it doesn't have to.
# Final Solution
In fact, google has full support for data control. A google form can be linked to a google sheet, so everytime there's a new submit, google automatically updates the sheet. [It can be super simple if you don't need much costumization.]('https://mrinalcs.github.io/submit-html-form-to-google-form') Also there's a bulit-in script feature in google sheet where you can turn sheet into json file:
```js
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses"); 
  const data = sheet.getDataRange().getValues();

  const json = data.slice(1).map(row => ({
    timestamp: row[0],
    name: row[1],
    message: row[2],
  }));

  return ContentService
    .createTextOutput(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON);
}
// The script is a mock, and does not expose credentials or write access.
```
Then fetch in original repo with exec link. <- should return a json. Rendering... and done.
# More features?
I want more fun in this guestbook, so a drawing area would be fine. Also there was a stranger from netlify who left a random test image, a reply feature might be good since I lowkey want to thank them. And finally, there was a minor bug within drawing area, when a submit doesn't contain any drawing, there will still be a empty picture rendered, ugly and confusing.
## Draw!
With HTML5 canvas api, a minimal drawing area was implemented. 
```js
const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", e => {
    if (!drawing)
        return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = "#000";
    ctx.fillRect(e.clientX - rect.left, e.clientY - rect.top, 2, 2);
});
```
Basically we define a boolean `drawing`, which only ensures drawing when mousedown. During `mousemove`, the cursor position is translated from viewport coordinates to canvas coordinates using `getBoundingClientRect()`. Then renderes a 2*2 black rectangle.
## Blank image
I use base64 to encode drawings. Base64 encoding does not embed semantic meaning, it merely represents binary data as ASCII characters. The browser determines how to interpret the decoded bytes based on the MIME type (`image/png`, `text/plain`, etc.) and the file format specification. In this setup, an empty canvas produces a deterministic PNG output in fixed size, which in turn results in a consistent Base64 string.
```js
const knownEmptyDrawings = [xxxxx...];
```
By comparing image data and `knownEmptyDrawings`, we can determine whether it's a empty image.
## Reply
It's not vital but I wanted to... so each message is mapped to a predefined response using a composite key in the format:
`name|message`

```js
const replies = {
  "Test|test": "Thank you for testing..."
};
const key = `${msg.name}|${msg.message}`;
const reply = replies[key] ?? "";
```
If a matching entry is found, a reply element is appended to the card.
# Final