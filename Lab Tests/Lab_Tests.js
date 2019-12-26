function login(){
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");
    var effect = document.getElementById("effect");
    var body = document.getElementById("webpage");
    login.style.display = 'block';
    signup.style.display = 'none';
    effect.style.display = 'block';
    body.style.overflow = 'hidden';
}



function signup(){
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");
    var effect = document.getElementById("effect");
    var body = document.getElementById("webpage");
    login.style.display = 'none';
    signup.style.display = 'block';
    effect.style.display = 'block';
    body.style.overflow = 'hidden';
}

function back(){
    var login = document.getElementById("login");
    var signup = document.getElementById("signup");
    var effect = document.getElementById("effect");
    var body = document.getElementById("webpage");
    login.style.display = 'none';
    signup.style.display = 'none';
    effect.style.display = 'none';
    body.style.overflow = 'scroll';
    body.style.overflowX = 'hidden';
}
