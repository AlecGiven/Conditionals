var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("enter a number"));
if(isNaN(num1)){
  document.write(num1 + "is not a number <br/>");
}else{
  document.write(num1 + "is a number <br/>");
}

var num3 = Number(prompt("enter an operator +,-,*,/"));
if(num3 =("(+),(-),(*),(/)")){
   document.write("operator")
   }else{
     document.write("is not an operator")
   }
   
   var num2 = Number(prompt("enter another number"));
if(isNaN(num2)){
 document.write(num2 + "is not a number <br/>");
}else{
 document.write(num2 + "is a number <br/>");
}

var sum = (num1 + num3 + num2)

sum = Math.ceil(sum);

containerEle.innerHTML=sum;