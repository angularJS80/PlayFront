// 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)
var inputNumber=500;

var outPutNumber=0;

outPutNumber = inputNumber / 3;


console.log("봉투의 갯수는"+outPutNumber+"개입니다.");

































if(inputNumber<3){
    console.log("입력값이 3보다 낮습니다");
    return;
}

if(inputNumber>5000){
    console.log("입력값이 5000보다 높습니다.");
    return;
}