window.onload = function() {
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

    $('.js-scroll-callback').click(function(){
        $('#callback').get(0).scrollIntoView();
    });

    $('.js-toogle-menu').click(function(){
        $('.js-landing-page').stop().toggleClass('js-menu-opened')
    });

    $('.js-close-menu').click(function(){
        $('.js-landing-page').removeClass('js-menu-opened')
    });

    $( "#form" ).submit(function( event ) {
        var form = $('#form')[0];
        var data = new FormData(form);

        sendEmail(data);
        event.preventDefault();
    });


    let sendEmail = async function (formData) {
        console.log(formData)
        const ParseTest = Parse;
        ParseTest.initialize("gmx4xCnEZ5P9QVAS9aJXP6exWOUiHIGwXUPkB5vc", "4xGFd4VrSIK4VfAiW9mNmOF4LZgzPH9VMBMbgE4Z");
        ParseTest.serverURL = 'https://komanda.mts.ru/parsetest'

        try {
            let sendEmail = await ParseTest.Cloud.run('sendEmail', formData)
            .then(function (data) {
                console.log(data)
                return data
            }, function (error) {
                console.log(error.code, error.message);
                return { token: false, code: error.code, message: error.message }
            });
            return sendEmail
        } catch(error) {
            return { token: false, code: error.code, message: error.message }
        }
    };


}