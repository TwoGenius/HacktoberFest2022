document.getElementById('form-submit').addEventListener('click', function(){
    let name = document.getElementById('exampleInputName').value;
    let email = document.getElementById('exampleInputEmail1').value;
    let message = document.getElementById('messageTextarea').value;

    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    
    if(name == '') {
       document.getElementById('name-error').innerText = 'Name is required';
    } else if(email == '') {
        document.getElementById('email-error').innerText = 'E-mail is required';
    } else {
        alert("Form Submitted")
    }
});