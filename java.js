for (let i = 0; i < 31; i++) {
    const item = [i];
    let fizz = "";
    let buzz = "";
  
    if (item % 3 === 0 ){
      fizz = "fizz";
  
  
    } else if (item % 5=== 0 ){
      buzz = "buzz";
  
  
    }else {
  
  
      console.log(item);
  
    }
    
    console.log(fizz+buzz)
  }