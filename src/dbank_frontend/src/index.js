import { InputForm } from "@dfinity/candid";
import { dbank_backend } from "../../declarations/dbank_backend";


window.addEventListener("load", async function(){

const currentAmount = await dbank_backend.checkBalance();
var roundedAmount = Math.round(currentAmount * 100) / 100
document.getElementById("value").innerText = roundedAmount;





console.log(dbank_backend.checkBalance());

});

document.querySelector("form").addEventListener("submit", async function(event){

event.preventDefault();

const button = event.target.querySelector("#submit-btn")


const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);


button.setAttribute("disabled", true);



  if(depositAmount > 0) {

    await dbank_backend.topUp(depositAmount);
    console.log("deposit triggered " + depositAmount)

    const currentAmount = await dbank_backend.checkBalance();
    var roundedAmount = Math.round(currentAmount * 100) / 100
    document.getElementById("value").innerText = roundedAmount;
    document.getElementById("deposit-amount").value = "";
    button.removeAttribute("disabled");


  } else if (withdrawAmount > 0) {


    console.log("withdraw triggered " + withdrawAmount)
    await dbank_backend.withdraw(withdrawAmount);

    const currentAmount = await dbank_backend.checkBalance();
    var roundedAmount = Math.round(currentAmount * 100) / 100
    document.getElementById("value").innerText = roundedAmount;
    document.getElementById("withdraw-amount").value = "";
    button.removeAttribute("disabled");
  }
  else {

    console.log("error")
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("deposit-amount").value = "";
    button.removeAttribute("disabled");
  }

 
});

// dbank_backend.checkBalance





