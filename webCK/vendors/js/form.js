function kthoten() {
    var ten = document.getElementById("txtht").value;
    var regten = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)$/;
    if (regten.test(ten)) {
        document.getElementById("outht").innerHTML = "(*)";
        return true;
    } else {
        document.getElementById("outht").innerHTML = "<small>(NotValid)</small>";
        return false;
    }
}



function ktsdt() {
    var sdt = document.getElementById("txtsdt").value;
    var regsdt = /^(03|09|08)\d{8}$/;
    if (regsdt.test(sdt)) {
        document.getElementById("outsdt").innerHTML = "(*)";
        return true;
    } else {
        document.getElementById("outsdt").innerHTML = "<small>(NotValid)</small>";
        return false;
    }
}




function ktpass() {
    var pass = document.getElementById('txtpassword').value;
    var regpass = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-]).{6,}$/;
    if (regpass.test(pass)) {
        document.getElementById('outpw').innerHTML = "(*)";
        return true;
    } else {

        document.getElementById('outpw').innerHTML = "<small>(NotValid)</small>";
        return false;
    }
}


function ktpass2() {
    var pass = document.getElementById('txtpassword').value;
    var pass2 = document.getElementById('txtpw2').value;
    if (pass == pass2) {
        document.getElementById('outpw2').innerHTML = "(*)";
        return true;
    } else {
        document.getElementById('outpw2').innerHTML = "<small>(NotValid)</small>";
        return false;
    }

}