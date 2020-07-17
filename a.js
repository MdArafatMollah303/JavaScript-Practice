var arr = ['fir', 'ftsajk', 
           'third', 'hggsgsJSH'];

function tinyFriend(arr){
    var lgth = 0;
var longest = arr[0];

for(var i=0; i < arr.length; i++){
    if(arr[i].length < lgth){
        var lgth = arr[i].length;
        longest = arr[i];
    } 
      
} 
return longest;
}
var result = tinyFriend(arr);

console.log(result);