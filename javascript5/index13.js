var x = "Hey Man how are you"
for(let i = 0; i < x.length; i++){
    if(i == 0){
        x[i] = x.charAt(i).toUpperCase();
    }
    if(x[i] == " "){
        x[i + 1] = x.charAt(i + 1).toUpperCase();
    }
    
}
console.log(x);