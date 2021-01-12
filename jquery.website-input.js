(function ($) {
    // if (!$) return console.error('JQuery not found!')
    $.fn.websiteInput = function (options) {
        return this.each(function () {
            const settings = $.extend({
                initValue: '',
                onChange: () => { }
            }, options);

            var $websiteInput__wrapper,
                $websiteInput__input,
                $websiteInput__website,
                $websiteInput__website_wrapper,
                $websiteInput__website_logo_wrapper,
                $websiteInput__website_logo,
                $websiteInput__website_edit,
                $websiteInput__website_close,
                $websiteInput__website_text;

            var updateDomain = function (input_val) {
                let domain;
                if (input_val.startsWith('http')) {
                    domain = new URL(input_val).hostname
                } else {
                    domain = input_val.replace(/(https?:\/\/)|(www.)/g, '')
                }
                $websiteInput__input.attr('placeholder', domain);
                $websiteInput__website_logo.attr('src', 'https://www.google.com/s2/favicons?domain=' + domain);
                $websiteInput__website_text.text(domain)
            }

            var toggleState = function () {
                $websiteInput__input.toggle();
                if ($websiteInput__website.css('display') === 'none') {
                    $websiteInput__website.css('display', 'flex')
                } else {
                    $websiteInput__website.css('display', 'none')
                }
            }

            $websiteInput__wrapper = $(`<div class="wi__wrapper">`).css({ display: 'flex', alignItems: 'center' }).appendTo($('body'))
            $websiteInput__input = $(this).css({ display: 'block', border: '1px solid #B0BAC8', padding: '.5em .75em', borderRadius: '.5em', outline: 'none', fontSize: '.9em', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', color: '#2A3E52' }).appendTo($websiteInput__wrapper)
            $websiteInput__website = $(`<div class="wi__website">`).css({ display: 'none', height: 32, alignItems: 'center', cursor: 'pointer', backgroundColor: '#f4f4f4', borderRadius: '.5em', paddingRight: '.5em' }).appendTo($websiteInput__wrapper)
            $websiteInput__website_wrapper = $(`<div class="wi__website_wrapper">`).css({ display: 'flex', alignItems: 'center' }).appendTo($websiteInput__website)
            $websiteInput__website_logo_wrapper = $(`<div class="wi__website_logo_wrapper">`).css({ display: 'flex', border: '1px solid', borderColor: '#B0BAC8', backgroundColor: '#fff', padding: '.5em', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)', borderRadius: '.5em', transition: 'border .2s ease-out' }).appendTo($websiteInput__website_wrapper)
            $websiteInput__website_logo = $(`<img width="16" height="16" src="" alt="favicon">`).appendTo($websiteInput__website_logo_wrapper)
            $websiteInput__website_edit = $(`<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.394 19.75l-5.481 1.308 1.239-5.551L14.758 4.9l4.243 4.243L8.394 19.749v.001zM6.98 15.506l1.414 1.414 7.779-7.778-1.415-1.415-7.778 7.779zM19.708 1.364l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242 2.12-2.122a1 1 0 0 1 1.415 0z" fill="#4F8DF9" fill-rule="nonzero" fill-opacity="1"></path></svg>`).appendTo($websiteInput__website_logo_wrapper)
            $websiteInput__website_text = $(`<span class="wi__text">`).css({ paddingLeft: '.5em', fontSize: '.9em', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', color: '#2A3E52' }).appendTo($websiteInput__website_wrapper)
            $websiteInput__website_close = $(`<div class="wi__close"><svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.97 6.657a8.003 8.003 0 0 0-11.313 0 8.003 8.003 0 0 0 0 11.314 8.003 8.003 0 0 0 11.314 0 8.003 8.003 0 0 0 0-11.314zm-3.394 9.05l-2.262-2.262-2.263 2.263-1.131-1.132 2.262-2.262L8.92 10.05 10.05 8.92l2.263 2.262 2.262-2.262 1.132 1.131-2.263 2.263 2.263 2.262-1.132 1.132z" fill="currentColor" fill-rule="nonzero"></path></svg></div>`).css({ marginLeft: '.5em', fontSize: '.75em', color: '#B0BAC8' }).appendTo($websiteInput__website)

            $websiteInput__website_wrapper.on('mouseover', function (e) {
                $websiteInput__website_edit.show();
                $websiteInput__website_logo.hide();
                $websiteInput__website_logo_wrapper.css({ borderColor: '#4D8FD9' })
            })

            $websiteInput__website_wrapper.on('mouseout', function (e) {
                $websiteInput__website_edit.hide();
                $websiteInput__website_logo.show();
                $websiteInput__website_logo_wrapper.css({ borderColor: '#B0BAC8' })
            })

            $websiteInput__website_close.on('mouseover', function (e) {
                $(this).css({ color: '#4D8FD9' })
            })

            $websiteInput__website_close.on('mouseout', function (e) {
                $(this).css({ color: '#B0BAC8' })
            })

            $websiteInput__website_close.on('click', function (e) {
                $websiteInput__input.val('')
                settings.onChange()
                $websiteInput__wrapper.remove()
            })

            $websiteInput__website_wrapper.on('click', function (event) {
                $websiteInput__input.val('')
                toggleState()
                $websiteInput__input.focus()
            })

            $websiteInput__website_text.on('focus', function (event) {
                $websiteInput__input.val('')
                toggleState()
                $websiteInput__input.focus()
            })

            $websiteInput__input.on('blur', function (event) {
                let value = $(this).val().trim();
                if (value) {
                    $(this).css('border-color','#B0BAC8')
                    toggleState()

                    if (value === $(this).attr('placeholder')) {
                        return;
                    }

                    updateDomain(value)

                    settings.onChange(value)
                } else if (!$(this).attr('placeholder')) {
                    $(this).css('border-color','red')
                } else {
                    toggleState()
                }
            })

            const enterKeyCode = 13;
            const escapeKeyCode = 27;

            $websiteInput__input.keyup(function (event) {
                if ([enterKeyCode, escapeKeyCode].includes(event.keyCode)) {
                    if (event.keyCode === 27 && $(this).val() !== $(this).attr('placeholder')) {
                        $(this).val($(this).attr('placeholder'))
                    }
                    $(this).blur() // update domain && toggle state
                }
            })

            if (settings.initValue) {
                $websiteInput__website_edit.hide()
                $websiteInput__website_text.attr('tabindex', 0)
                $websiteInput__input.val(settings.initValue)
                updateDomain(settings.initValue)
                toggleState()
            }
        })
    }
}(jQuery))