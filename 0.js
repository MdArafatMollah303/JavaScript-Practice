var array =[2,3,1,9,8];
var minvalue = array[0]; 
for (var i = 0; i < array.length; i++) {
    if(array[i]<minvalue)
    {
        minvalue = array[i];
    }

}
  console.log(minvalue);