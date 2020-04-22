

$(document).ready(function () {
    $('#tour').validate({
        rules: {
            name: {
                required:true
            },
            phone: {
                required:true
            },
            number: {
                required:true
            }
        },
        messages: {
            name: {
                required: 'Укажите Ваше имя'
            },
            phone: {
                required: 'Укажите телефон'
            },
            number: {
                required: 'Укажите кол-во'
            }
        }
    })
});