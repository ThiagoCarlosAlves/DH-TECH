const submit = document.getElementById('send');


submit.addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    console.log('name ', name.value);
    console.log('email ', email.value);
    console.log('password ', password.value);
    const deuCerto = false;
    if(deuCerto){
        window.location.href = "/home/html/";
        window.location.assign('/home/html/')
    }else{
        return;
    }


})