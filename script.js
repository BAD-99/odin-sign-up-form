const pass = document.querySelector('#password')
const confirmPass = document.querySelector('#confirm-password')

pass.addEventListener('keyup', confirm);
confirmPass.addEventListener('keyup', confirm)

function confirm(){
    if(pass.value != confirmPass.value){
        pass.classList.toggle('error', true);
        confirmPass.classList.toggle('error', true);
    }
    else{
        pass.classList.toggle('error', false);
        confirmPass.classList.toggle('error', false);
    }
}