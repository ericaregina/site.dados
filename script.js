document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var infoList = document.getElementById('infoList');
    var listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Nome:</strong> ${name}, <strong>Email:</strong> ${email}, <strong>Mensagem:</strong> ${message}`;
    infoList.appendChild(listItem);

    document.getElementById('infoForm').reset();
});
