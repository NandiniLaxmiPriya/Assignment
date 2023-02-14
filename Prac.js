const square =(number) =>{
   let result =  number.map(n => n**2)
 
   return result;
}
console.log(square([1,2,3,4,5,6]));

const product = (number)=>{

    let ans= number.reduce((p,c)=> p*c);
    console.log(ans);
}
product([1,2,3,4,5,6]);
let num =[1,2,3,4,5];
console.log(num.map(n => n**2).filter( r => r>10));