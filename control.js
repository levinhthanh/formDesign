
function checkTyping(){
    let fn = document.getElementById('firstName').value;
    if(fn==='')
    {
        document.getElementById('fnIcon').style.display = 'block';
        document.getElementById('fail1').innerHTML = 'First Name cannot be empty';
    }

    let ln = document.getElementById('lastName').value;
    if(ln==='')
    {
        document.getElementById('lnIcon').style.display = 'block';
        document.getElementById('fail2').innerHTML = 'Last Name cannot be empty';
    }
    
    let pw = document.getElementById('password').value;
    if(pw==='')
    {
        document.getElementById('pwIcon').style.display = 'block';
        document.getElementById('fail4').innerHTML = 'Password cannot be empty';
    }

    let em = document.getElementById('email').value;
    let check = checkEmail(em);
    if(!check){
        document.getElementById('emIcon').style.display = 'block';
        document.getElementById('fail3').innerHTML = 'Looks like this is not an email'; 
    }
    
}
function checkEmail(){
  
}
