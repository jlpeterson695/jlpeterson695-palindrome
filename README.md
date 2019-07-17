# Phrase object (with palindrome detector)

```
$ npm install --global jlpeterson695-palindrome
$ vim test.js
let Phrase = require("jlpeterson695-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
