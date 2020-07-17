
function tinyFriend(friend){
    var max = 0;
var long;
for(var i=0;i<friend.length;i++){
    if(friend[i].length<max){
        max=friend[i].length;
        long=friend[i];
    }
}
return long;
}
var friend = ['fGSA', 'shbSL', 'BAJKSA', 'Shljksa'];
var result = tinyFriend(friend);
console.log(result);