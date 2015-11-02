'use strict'
console.log('script');

function create() {
    sendAjax('POST', 'create');
}

function login() {
    sendAjax('POST', 'login');
}

function sendAjax(method, route) {
    const name = $('#group').val();
    const pass = $('#pass').val();
    
    console.log(name, pass);
    
    $.ajax({
        method: method,
        async: true,
        contentType: 'application/json',
        url: route, 
        data: JSON.stringify({name: name, pass: pass}),
        success: function(response) {
            console.log('success');
            console.log(response);
        },
        error: function(error) {
            console.log('there was an error');
            console.log(error);
        },
    });
}

