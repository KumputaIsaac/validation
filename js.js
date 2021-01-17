const form= document.getElementById('form')
const username= document.getElementById('username')
const password= document.getElementById('password')
const passwordCheck= document.getElementById('passwordCheck')
const email= document.getElementById('email')



function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;
    
    formControl.className = 'form-control error'
}

function setSuccessfor(input){
    const formControl = input.parentElement;
    
    formControl.className = 'form-control success'
}



console.log( )


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const usernamevalue= username.value.trim();
    const emailvalue= email.value.trim();
    const passwordvalue= password.value.trim();
    const passwordCheckvalue= passwordCheck.value.trim();

    if(usernamevalue===''){
        // show error
        // add error class
        setErrorFor(username, 'username cannot be blank')
    }else{
        //add success class
        setSuccessfor(username)
    }

    if(emailvalue===''){
        setErrorFor(email, 'email cannot be blank')
    }
    else if(!validateEmail(emailvalue)){
        setErrorFor(email, 'email is not valid')
    }
    else{
        setSuccessfor(email)
    }
    if(passwordvalue===''){
        setErrorFor(password, 'password cannot be blank')
    }else{
        //add success class
        setSuccessfor(password)
    }

    if(passwordCheckvalue===''){
        setErrorFor(passwordCheck, 'password2 cannot be blank')
    }else if(passwordCheckvalue!==passwordvalue){
        setErrorFor(passwordCheck, 'passwords does not match')
    }
    else{
        //add success class
        setSuccessfor(passwordCheck)
    }
}


function validateEmail(emailvalue) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailvalue);
}

