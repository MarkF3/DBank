
import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor dBank {

stable var currentValue: Float = 0;

stable var startTime = Time.now();


 Debug.print(debug_show(startTime));

public func topUp(topUpAmount: Float) {

currentValue += topUpAmount;


Debug.print(debug_show(currentValue));

};

public func withdraw(withdrawAmount: Float){

    let tempValue: Float = currentValue - withdrawAmount;

if(tempValue >= 0){

currentValue -= withdrawAmount;
Debug.print(debug_show(currentValue));

} else {

    Debug.print(debug_show("Funds unavailable"));
}


};

public query func checkBalance(): async Float {

return currentValue;

};

public func compound() {

    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;

    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
};


}



