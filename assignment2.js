
    function sum(array){
        if (array.length === 1){
            return array[0];
        }

     else {
         return array.pop() + sum(array);
     }


    }
    let array =[3,4,6,7,8,9]
    console.log(sum(array))

    /***
     * function min(array) {
if (array.length > 1) {
let other = min(array.splice(1));
if (other < array[0]) {
return other;
}
}
return array[0];
}
     */

     function findmin(array1){
         let min = array1[0];
         for (let i=0;i<array1.length;i++){
             if(min >array1[i]){
                 min = array1[i];

             }
             

     }
     
    return min;
    }
     let array1 = [3,5,7,2,1,9] 
     console.log(findmin(array1))

     /**
      * recurssion version 
      */

      function recursionmin(array1){
          if(array1.length-1 === 0){
              
          }
      }