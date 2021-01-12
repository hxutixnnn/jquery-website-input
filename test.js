$(document).ready(function () {
    $('.website-input').websiteInput({
        initValue: 'facebook.com',
        onChange: (value) => {
            console.log(value)
        }
    })
});