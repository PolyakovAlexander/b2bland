
window.onload = function() {
    var scrollButtons = document.getElementsByClassName('js-scroll-callback');
    var menuHamburger = document.getElementsByClassName('js-toggle-menu');
    var callbackSection = document.getElementById('callback');

    for (var i = 0; i < scrollButtons.length; i++) {
        scrollButtons[i].addEventListener('click', function() {
            callbackSection.scrollIntoView()
        });
    }

    for (var i = 0; i < menuHamburger.length; i++) {
        menuHamburger[i].addEventListener('click', function() {

        });
    }


    var invalidClassName = 'invalid'
    var inputs = document.querySelectorAll('input')

    inputs.forEach(function (input) {
        input.addEventListener('invalid', function () {
            input.classList.add(invalidClassName)
        })

        input.addEventListener('input', function () {
            if (input.validity.valid) {
            input.classList.remove(invalidClassName)
            }
        })
    })

    $('.js-toogle-menu').click(function(){
        $('.js-landing-page').stop().toggleClass('js-menu-opened')
    });

    $('.js-close-menu').click(function(){
        $('.js-landing-page').removeClass('js-menu-opened')
    });

    $( "#form" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
    });

    // async sendEmail(formData){
    //     const ParseTest = require('parse');
    //     ParseTest.initialize("gmx4xCnEZ5P9QVAS9aJXP6exWOUiHIGwXUPkB5vc", "4xGFd4VrSIK4VfAiW9mNmOF4LZgzPH9VMBMbgE4Z");
    //     ParseTest.serverURL = 'https://komanda.mts.ru/parsetest'

    //     try {
    //       let sendEmail = await ParseTest.Cloud.run('sendEmail', formData)
    //         .then(function (data) {
    //           return data
    //         }, function (error) {
    //           console.log(error.code, error.message);
    //           return { token: false, code: error.code, message: error.message }
    //         });
    //       return sendEmail
    //     } catch(error) {
    //       return { token: false, code: error.code, message: error.message }
    //     }
    //   }

    // MaskedInput({
    //     elm: document.getElementById('phone'), // select only by id
    //     format: '+7 (__) ___-__-__',
    //     separator: '+7 (   )-'
    //  });
}