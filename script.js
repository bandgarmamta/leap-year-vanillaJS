var inputYear = document.querySelector("#input-year");
var btnCheck = document.querySelector("#btn-check");
var outputYear = document.querySelector("#output");

function isLeapYear(){
    var year = Number(inputYear.value);
    if (year<0||year===0){
      return outputYear.textContent = "Please enter a valid year";
  
    }
    else{
      if (year % 400 === 0) {
      return outputYear.textContent =  "yes! it is a leap year";
      }
      if (year % 100 === 0) {
        return outputYear.textContent = "No! it's not a leap year";
      }
      if (year % 4 === 0) {
        return outputYear.textContent =  "yes! it is a leap year";
      }
      else{
        return outputYear.textContent =  "No! it's not a leap year";
      } 
    }
  }
  
  btnCheck.addEventListener("click",isLeapYear);