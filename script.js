document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getStartedButton').addEventListener('click', function() {
        window.location.href = '#home';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    var submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim!',
            html: '<p>Email: ' + document.getElementById('email').value + '</p>' +
                  '<p>Pesan: ' + document.getElementById('message').value + '</p>',
        });
    });
});