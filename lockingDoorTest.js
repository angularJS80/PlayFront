// 문
// protoType

/*
var doorModel = {
    "status":"closed",
        "lock":{}
}

// 도어락본체
var lockModel = {
    "unLocking" : unLocking,
    "locking" : locking,
    "addPpl":addPpl,
    "lockCd":"homeLock",
    "keyNumber":"12345",
    "pplHans":[]
}

 // 사람
 var ppl ={
 "name":"cho",
 "keys":[]
 }

 var key = {
 "lockCd":"homeLock"
 ,"keyValue":"12345"
 ,"keyFlag":"Number"
 }



*/
// key 정의




var Key = function () {
    return  {
        "lockCd":"frontDoor"
        ,"keyValue":"12345"
        ,"keyFlag":"Number"
    }
}

var Ppl = function () {
    return {
        "name":"",
        "keys":[],
        "openDoor":openDoor,
        "readyKey":readyKey,
        "handOnKey":""
    }
}


var readyKey = function (lCd) {
                        /*차키*/

    console.log(this.keys);

    // 기본 문법으로 순차 탐색하여 찾기
    /*var newKeyArray = [];
    for(var i=0;i<this.keys.length;i++){
        if(this.keys[i].lockCd == lCd){
            this.handOnKey = this.keys[i].keyValue;
            newKeyArray.push(this.keys[i].keyValue)
        }

    }



    // 배열에 map 기능을 이용하여 찾기
    var keyMapIndex = this.keys.map(function (key) {
        return key.lockCd
    })


     */

    var keyMapIndex = this.keys.map(     key => key.lockCd           )
    .indexOf(lCd);
    console.log("keyMapIndex"+keyMapIndex)

    var handOnkey = this.keys.filter(function (key) {
        return key.lockCd == this.lcd;
    })

    var newKeyArray = this.keys.filter(function (key) {
        return key.lockCd = this.lCd;
    })


    // 특정값에 찾기에 이용되는 findIndex
    var keyFindeIndex = this.keys.findIndex( key => key.lockCd === lCd);

    var keyFindeIndex = this.keys.findIndex(function (key) {
        return key.lockCd === this.lCd
    })
    this.handOnKey = this.keys[keyFindeIndex].keyValue;



    console.log("keyFindeIndex"+keyFindeIndex)




}

var Door = function () {
    return {
        "status":"closed",
        "lock":{},
    }
}

var Lock = function () {
    return {
        "unLocking" : unLocking,
        "locking" : locking,
        "addPpl":addPpl,
        "lockCd":"frontDoor",
        "keyValue":"12345",
        "pplHans":[]
    }
}


var openDoor = function (door) {


    if(door.status=="opened"){
        console.log("already opened!");
    }else{




            door.lock.unLocking(this.handOnKey)


    }
}

// 풀기 기능
var unLocking = function (handOnKey) {
    if(this.keyValue == handOnKey){
        console.log("success unLocking");
    }


}

// 잠구기 기능
var locking = function () {

}

// 지문추가
var addPpl = function () {

}







var run = function(){

    var frontDoor = new Door();
    var sideDoor = new Door();
    frontDoor.status = "closed";
    frontDoor.lock = new Lock();
    console.log(frontDoor);

    var cho = new Ppl();
    cho.name = "cho";


    cho.keys.push(new Key())
    // 키제거 키의 번지수를 가져와서 splice 를 지운다.


    // 또는 배열을 탐색하며 배열인스턴스.delete; 를 수행한다.
    var spliceRight = cho.keys.splice(cho.keys.indexOf('frontDoor'),1);
    // keyPoint https://medium.com/@laziel/javascript-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%86%8D%EC%84%B1%EC%9D%84-%EC%A0%9C%EA%B1%B0%ED%95%A0-%EB%95%8C-delete-%EC%97%B0%EC%82%B0%EC%9E%90%EB%B3%B4%EB%8B%A4-undefined-%EB%82%98-null-%EA%B0%92%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%9C%EB%8A%94-%EA%B2%83%EC%9D%B4-%EB%82%AB%EB%8B%A4-2db597f64514


    console.log(cho.keys);

    cho.readyKey('frontDoor')

    cho.openDoor(frontDoor);

    // cho open (door)
    // lock mach




}

run();



