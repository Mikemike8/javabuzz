for (let i = 1; i < 31; i++) {
    const item = i;
    let fizz = "";
    let buzz = "";
  

    if (item % 3 === 0) {
        fizz = "fizz";
    }  
    
    if (item % 5 === 0) {
        buzz = "buzz";
    }
    console.log(fizz + buzz  || item);
}