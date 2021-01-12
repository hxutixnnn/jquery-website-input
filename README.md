# jQuery Website Input
A jQuery Plugin to make your website input prettier.

## Demo

![Example](./example.png)

[https://hxutixnnn.github.io/jQuery-Website-Input/](https://hxutixnnn.github.io/jquery-website-input/)

## Installation
### NPM
`npm i -s jquery-website-input`
### CDNs
```html
<script src="https://cdn.jsdelivr.net/npm/jquery-website-input@latest/jquery.website-input.min.js"></script>
```
```html
<script src="https://unpkg.com/jquery-website-input@latest/jquery.website-input.js"></script>
```

## Usage

```html
<input type="text" class="website-input" />
```

```javascript
$(document).ready(function () {
    $('.website-input').websiteInput({
        initValue: 'facebook.com',
        onChange: (value) => {
            console.log(value)
        }
    })
});
```
