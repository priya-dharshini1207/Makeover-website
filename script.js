function submitForm(){
    alert("Thank you for contacting Brush & Blush by Gayu 💄");
}

function updatePrice(){
    let service = document.getElementById("service").value;
    let price = document.getElementById("price");

    if(service === "Bridal Makeup") price.value = "₹15,000";
    else if(service === "Party Makeup") price.value = "₹5,000";
    else if(service === "Professional Makeup") price.value = "₹8,000";
    else price.value = "₹20,000";
}

function placeOrder(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    if(name==="" || phone==="" || date===""){
        alert("Please fill all required details");
    }else{
        let orderId = "BBG" + Math.floor(Math.random()*10000);

        localStorage.setItem("custName", name);
        localStorage.setItem("custService", service);
        localStorage.setItem("custDate", date);
        localStorage.setItem("orderId", orderId);

        window.location.href = "confirm.html";
    }
}
function login(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if(user === "gayu" && pass === "1234"){
    localStorage.setItem("loggedIn","true");
    window.location.href = "home.html";
  }else{
    document.getElementById("error").innerText = "Invalid Username or Password";
  }
}
