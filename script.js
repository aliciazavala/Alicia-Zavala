
function country(x) {
  switch(x.value) {
    case "Blv":
      document.getElementById("bolivia").classList.toggle("show")
      
  }
}

function AMOUNT(){
  
  var input = document.getElementById("input").value;
  document.getElementById("result").innerText = input * 0.52;
  document.querySelector("#transfer").addEventListener("click",(e) => {
  document.getElementById("bolivia").classList.remove("show");
  document.getElementById("transfering").classList.toggle("show");
  document.getElementById("transfer1").innerText = input * 0.52 + " XRP";
  document.getElementById("current").innerText = "$ " + ((input * 0.52)*0.28);
  document.getElementById("reciep").innerText = "Bs. "+ input;
  })
}

function dropDown() {
  document.getElementById("UserMenu").classList.toggle("show");
  document.getElementById("CountryMenu").classList.toggle("show");
}
function dropDown2() {
  document.getElementById("CountryMenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.username')) {
    var dropdowns = document.getElementsByClassName("user-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  
}
