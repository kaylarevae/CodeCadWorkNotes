```javascript <script src="./exampleScript.js"></script>```
The **defer** specifies scripts should be executed after the HTML file is completely parsed
EXAMPLE ```javascript <script src="example.js" defer></script> ```
**async** is useful for scripts that are independent of other scripts in order to function accordingly.
## Document Object Model
Tree-like structure that allows programmers to conceptualize hierarchy and access the elements on a web page
**node** : An intersecting point in a tree that contains data
Top most note: Root node, represents HTML document
Descendants: HTML tags in a document starting html, head, body
## Document keyword
**Document** object in javascript is the "door" to the DOM structurure and allows access to the root node of the tree
Must access document structure before accessing a specific element on the page

**List of all document properties** https://developer.mozilla.org/en-US/docs/Web/API/Document

**.querySelector()** method allows us to specify a CSS selector as a string and returns the first element that matches that selector.

**element.style.property** 
DOM .style property does not implement a hyphen, but uses camelCase

**MDN reference of CSS converted to JavaScript** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

The document element is the root node so .parentNode will return null

## Create and insert elements
**.createElement()** method creates a new element based on the tag passed into it as an argument. Does not append to document, creates empty element with no inner HTML
Example
```javascript
let paragraph = document.createElement('p');
```
Can assign values to properties of new elements
Example
```javascript
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
```
To add it to the page it must be assigned as a child of an element already on the DOM aka appending with **appendChild()** method
Example: This appends p element stored in the paragraph variable to the document body.
```javascript
document.body.appendChild(paragraph);
```
