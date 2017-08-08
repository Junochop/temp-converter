
// Assign a function to be executed when the button is clicked
var button = document.getElementById("convert");

var buttonClear = document.getElementById("clear");


button.addEventListener("click", determineConverter);
buttonClear.addEventListener("click", clearField);

// function enterButton() {
// 	if (event.which === 13) {

// 	}
// }

function clearField () { 
  document.getElementById("iniTemp").value = '';
  document.getElementById("converter").innerHTML = '';
} 


function toCelsius () {
   var valueC = Math.floor((parseInt((document.getElementById("iniTemp").value)) - 32) * (5/9));
    console.log(valueC);
    return valueC;
}

function toFahrenheit () {
  var valueF = Math.floor(parseInt(document.getElementById("iniTemp").value) * 1.8 + 32);
  return valueF;
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  
  if (document.getElementById("cel").checked) { 
    var ct = toCelsius();
    // console.log("event", clickEvent);
    if (ct > 32) {
    	document.getElementById("converter").style.color = "red";   	
    } else if (ct < 0) {
    	document.getElementById("converter").style.color = "blue";

    } else if (ct < 32 && ct > 0) {
    	document.getElementById("converter").style.color = "green";
    }
  
  document.getElementById("converter").innerHTML = ct;
  }



  if (document.getElementById("fah").checked) { 
    var ft = toFahrenheit();
    
    if (ft > 90) {
    	document.getElementById("converter").style.color = "red";
    } else if (ft < 32) {
    	document.getElementById("converter").style.color = "blue";
    } else  if (ft < 90 && ft > 32){ 
    	document.getElementById("converter").style.color = "green";
    }
  
  document.getElementById("converter").innerHTML = ft;
  }

  // if (ft = false && ct = false) {
  // 	document.getElementById("converter").innerHTML = 'check yo radio button and or input value!';
  // 	// alert("check yo radio button and or input value!");
  // }

}