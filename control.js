
function checkTyping() {
    let fn = document.getElementById('firstName').value;
    if (fn === '') {
        document.getElementById('fnIcon').style.display = 'block';
        document.getElementById('fail1').innerHTML = 'First Name cannot be empty';
    }

    let ln = document.getElementById('lastName').value;
    if (ln === '') {
        document.getElementById('lnIcon').style.display = 'block';
        document.getElementById('fail2').innerHTML = 'Last Name cannot be empty';
    }

    let pw = document.getElementById('password').value;
    if (pw === '') {
        document.getElementById('pwIcon').style.display = 'block';
        document.getElementById('fail4').innerHTML = 'Password cannot be empty';
    }

    let em = document.getElementById('email').value;
    let check = checkEmail(em);
    if (!check) {
        document.getElementById('emIcon').style.display = 'block';
        document.getElementById('fail3').innerHTML = 'Looks like this is not an email';
    }

}
function checkEmail(email) {
    const SK = ['`','~','!','#','$','%','^','&','*','(',')','/','?','<','>'];
    let at = email.indexOf('@');
    let dot = email.lastIndexOf('.');
    let space = email.indexOf(' ');
    if ((at != -1) && //có ký tự @
        (at != 0) && //ký tự @ không nằm ở vị trí đầu
        (dot != -1) && //có ký tự .
        (dot > at + 1) && (dot < email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
        &&
        (space == -1)) //không có khoẳng trắng 
    {
        for(let i=0; i< email.length; i++){
            if(SK.indexOf(email[i]) !== -1) return false;
        }
        let cnt = 0;
        for(let i=0; i< email.length; i++){
            if(email[i] === '@') cnt++;
        }
        if(cnt>1) return false;
        return true;
    }
     else {
        return false;
    }
}
