
import Debug "mo:base/Debug"


actor dBank {

var currentValue = 300;
currentValue := 100;

let id = 123456789;


public func topUp(topUpAmount: Nat) {

currentValue += topUpAmount;


Debug.print(debug_show(currentValue));

};

public func withdraw(withdrawAmount: Nat){

    let tempValue: Int = currentValue - withdrawAmount;

if(tempValue >= 0){

currentValue -= withdrawAmount;
Debug.print(debug_show(currentValue));

} else {

    Debug.print(debug_show("Funds unavailable"));
}


};

public query func checkBalance(): async Nat {

return currentValue;

}


}



