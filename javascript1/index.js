function replace(num1, num2) {
        let temp = num1;
         num1 = num2;
         num2 = temp;
        
     }
    
    //  sort the array in accending order
    
     let numbers= [-23,-324,34,234,23,6576,78,34,324];
     let number= [-23,-324,34,234,23,334,78,34,6576];
    
     for(let j = 0; j < numbers.length; j++) {
         for (let i = 0; i < numbers.length - j; i++) {
             if (numbers[i] > numbers[i + 1]){
                replace(numbers[i], numbers[i + 1]);
             }
             
             return{replace}    
         }
     }
     console.log(temp);