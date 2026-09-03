document.getElementById("emailform").addEventListener("submit",function(event){
    event.preventDefault();
    const email=document.getElementById("emailId").value;
    const mess = document.getElementById("message");
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$/;
    if(pattern.test(email)){
        mess.style.color="green";
        mess.textContent="Email is valid";
        document.getElementById("emailId").value="";
        
    }
    else{
        mess.style.display = "block";
        mess.style.color = "red";
        mess.textContent = "Email is invalid please enter valid one.";
    }

})