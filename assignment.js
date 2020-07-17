// problem no 1 

function feetToMile(feet){
    if(feet >= 0){
      var mileCalculation = feet * 0.000189394;
      return mileCalculation;
    }
    else{
        return 'Distance cannot be negative.';
    }

}

var mile = feetToMile(1);
console.log(mile);

// problem no 2

function woodCalculator(chair,table,bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    
    return chairWood + tableWood + bedWood;

}
var woodResult = woodCalculator(10,10,12);
console.log(woodResult,'qubic feet');

// problem no 3

function brickCalculator(floor){
if(floor>0){
    var twentyFloorPlus = 0;
    var elevenToTwenty = 0;
    var oneToTen = 0;
    if(floor > 20){
        twentyFloorPlus = (floor - 20) * 10 * 1000;
        elevenToTwenty = 10 * 12 * 1000;
        oneToTen = 10 * 15 * 1000;
        return twentyFloorPlus + elevenToTwenty + oneToTen;

    }
    else{
        if(floor > 10 && floor < 21){
            elevenToTwenty = (floor -10) * 12 * 1000;
            oneToTen = 10 * 15 * 1000;
            return elevenToTwenty + oneToTen;
        }
        else{
            oneToTen = floor * 15 * 1000;
            return oneToTen;
        }
    }
}
else{
    return 'Floor must be minimum 1.Floor cannot be 0 or negative.';
}

}

var totalBrick = brickCalculator(10);
console.log(totalBrick);

// problem no 4

function tinyFriend(friendsName){
    var index;
    if(friendsName.length>0){
    var smallName = friendsName[0].length;
    for(var i = 0; i < friendsName.length; i++){
        if(smallName > friendsName[i].length){
            index = i;
        }
    }
    }
    else{
        return 'this is empty array';
    }
    return friendsName[index];
}

var friendsName = ['rahul', 'faisal', 'abu', 'niazul islam', 'tomas'];
smallFriend = tinyFriend(friendsName);
console.log(smallFriend);

