
var numbers = [1,2];
//console.log(numbers);
//console.log(numbers[0]);

numbers.push(3);
numbers.splice(2,1);



//console.log(numbers);


var strings = ["1","2"];

//console.log(strings);

var combines = [1,"2",true,1==2,null];
//console.log(combines);



var fn = function (st,ed) {
    console.log("input st : "+st);
    console.log(" input ed :"+ ed);
    if(st<ed){
        console.log("its true");
        for(var i=st;i<ed;i++){
            console.log(combines[i]);
        }
    }else if(st == ed){
        console.log("its same");
    }else {
        console.log("its false");
    }
}


// 시작점 0
// 종료점 4
// 현재점 0 1 2 3 4

for(var i=0;i<5;i++){
   // console.log(combines[i]);
}


fn(4,4);


/*

console.log(combines[0]);
console.log(combines[1]);
console.log(combines[2]);
console.log(combines[3]);
console.log(combines[4]);
*/
/*
var member = ['1', '2', '3']


alert(member[0]);
alert(member[1]);
alert(member[2]);

*/


/*
var itsMe = function(name,age,height){
    console.log("저는"+name +"입니다");
    console.log("나이는"+age +"입니다");
    console.log("키는"+height +"입니다");
}
*/


var itsMe = function(ppl){
    console.log("저는"+ppl.name +"입니다");
    console.log("나이는"+ppl.age +"입니다");
    console.log("키는"+ppl.height +"입니다");
}

itsMe("cho",20,170,1,2,3,5,3,2,1,2,4,5,45,6,7,7,);

var cho= {
    "name": "cho",
    "age": "20",
    "height":"170"
}


itsMe (cho);
