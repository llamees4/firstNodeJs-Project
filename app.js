num=[1,22,56,33,75,99,48]

fun1=num.map((x) => x/2);
fun2=num.filter(x=>x%2==0);
console.log("numbers before functions ",num)
console.log('Half the number ? ' ,fun1)
console.log(`only even numbers [ ${fun2}  ]`)