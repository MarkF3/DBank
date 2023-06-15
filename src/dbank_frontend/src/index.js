import { InputForm } from "@dfinity/candid";
import { dbank_backend } from "../../declarations/dbank_backend";


window.addEventListener("load", async function(){

const currentAmount = await dbank_backend.checkBalance();
var roundedAmount = Math.round(currentAmount * 100) / 100
document.getElementById("value").innerText = roundedAmount;





console.log(dbank_backend.checkBalance());

});

window.addEventListener("submit", async function(event){

event.preventDefault();

const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
console.log(depositAmount);





  if(depositAmount > 0) {

     dbank_backend.topUp(depositAmount);
    console.log("deposit triggered " + depositAmount)



  } else if (withdrawAmount > 0) {


    console.log("withdraw triggered " + withdrawAmount)
     dbank_backend.withdraw(withdrawAmount);

 

  }

 
});

// dbank_backend.checkBalance





