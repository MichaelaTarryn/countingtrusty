 var arr=[true,true,true,false,false,true,false];
 var count={};

 for( var i=0;i<arr.length;i++){
    var num=arr[i];
    count[num]=count[num]?count[num] +1:1;
 }
//display in console how many true nd false elements there are
 console.log(count);