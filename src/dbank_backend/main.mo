
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

currentValue -= withdrawAmount;

Debug.print(debug_show(currentValue));

}




}



