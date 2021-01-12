# jQuery Website Input
A jQuery Plugin to make your website input prettier.

## Demo

![Example](https://hxutixnnn.github.io/jquery-website-input/example.png)

https://hxutixnnn.github.io/jQuery-Website-Input/

## Installation
### NPM
`npm i -s jquery-website-input`

### UNPKG
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
