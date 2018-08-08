/*Json
* 자바스크립트 객체
* */

function test() {
    console.log("테스트 함수 내부의 동작입니다.");
}

var testFn = function () {
    console.log("testFn 함수 내부의 동작입니다.");
}



var itsMe = function (name,weight) {
    console.log("나는"+ name +"입니다.");
    console.log("몸무게는 "+ weight +"kg 입니다.");

}

var itsMeDetail = function (ppl) {
    console.log("나는"+ ppl.name +"입니다.");
    console.log("몸무게는 "+ ppl.weight +"kg 입니다.");
    console.log("여형재가 있나요 ? "+ ppl.sister );
    console.log("남형재가 있나요 ? "+ ppl.bro );

}


test();
testFn();

itsMe("조용범");

var cho ={
    "name":"조용범"
    ,"weight":"65"
    ,"height":"170"
    ,"mind":"open"
    ,"sister":"Y"
    ,"bro":"Y"
    ,"itsMe": function () {
        var name = "1234";
        console.log("나는"+ this.name +"입니다.");
        console.log("몸무게는 "+ this.weight +"kg 입니다.");
        console.log("여형재가 있나요 ? "+ this.sister );
        console.log("남형재가 있나요 ? "+ this.bro );

    },

}

cho.itsMe();
//itsMeDetail(cho);


var lock ={ "key":"?????" ,"lockOrNolock":""
    ,isLock:function(){
        if(this.lockOrNolock =="lock"){
            return true;
        }else{
            return false;
        }
    }
}

lock.lockOrNolock = "lock";
console.log(lock.isLock())


lock.lockOrNolock = "unlock";
console.log(lock.isLock())


var Door = function(){
    return {"openOrClose":"open", "lock":lock}
}
var door = new Door();


Door.prototype.cry = function(){
    console.log("red alert");
}

door.cry();


var open = function(door){
    console.log(door);
    console.log(this.useKey);
    console.log(this.useKey);
    console.log(this.useKey);
    console.log(this.useKey);

    if(door.openOrClose=="close"){

        if(door.lock.isLock()){
            console.log("need key");
        }else{
            console.log("u can open free")
        }
    }else{
        console.log("already opend");
    }

}

var isLock = function(lock){
    if(lock.lockOrNolock == true){
        return true;
    }else{
        return false;
    }
}



var ppl = {
    "useKey":"1111111111"
    ,"name":"cho"
    ,"open":open



}


/*
var close = function(){
    if("openOrClose"=="open"){
        console.log("closed");
        if("key"==""){
            consolo.log("set key plase");
        }else{
            consolo.log("locked ");
        }
    }
}
*/

ppl.open(door)

















































































